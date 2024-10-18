"use client"
import { Formik } from "formik"
import * as Yup from "yup"
import Button from "@/components/ui/Button"
import Input from "@/components/ui/Input"
import { ErrorMessage, Field, Form } from "formik"
import { useState } from "react"
import FormItem from "@/components/ui/Form/FormItem"

function Login() {
    return (
        <div className="flex justify-center items-center bg-white dark:bg-slate-900 p-4 rounded shadow md:w-2/4 w-full">
            <Formik
                initialValues={{ email: '', password: '' }}
                validationSchema={Yup.object({
                    email: Yup.string().email('Invalid email').required('Required'),
                    password: Yup.string().required('Required'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {

                        setSubmitting(false)
                    }, 400)
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <FormItem label="Email">
                            <Field type="email" name="email" component={Input} />
                            <ErrorMessage name="email" component="div" />
                        </FormItem>
                        <FormItem label="Password">
                            <Field type="password" name="password" component={Input} />
                            <ErrorMessage name="password" component="div" />
                        </FormItem>
                        <FormItem>
                            <Button type="submit" disabled={isSubmitting}>
                                Submit
                            </Button>
                        </FormItem>
                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default Login