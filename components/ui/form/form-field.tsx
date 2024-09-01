"use client"

// DONE REVIEWING: GITHUB COMMIT

import {createContext, useContext, useMemo} from "react"
import {Controller, ControllerProps, FieldPath, FieldValues, useFormContext} from "react-hook-form"
import {FormItemContext} from "./form-item"

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> = {name: TName}

const FormFieldContext = createContext<FormFieldContextValue>({} as FormFieldContextValue)

const FormField = function FormField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({...props}: ControllerProps<TFieldValues, TName>) {
  const value = useMemo(() => ({name: props.name}), [props.name])
  return (
    <FormFieldContext.Provider value={value}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  )
}

export const useFormField = function useFormField() {
  const fieldContext = useContext(FormFieldContext)
  const itemContext = useContext(FormItemContext)
  const {getFieldState, formState} = useFormContext()
  const fieldState = getFieldState(fieldContext.name, formState)

  if (!fieldContext)
    throw new Error("React Hook: (<useFormField />) must be used with-in its (Provider)")
  const {id} = itemContext

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  }
}

export default FormField
