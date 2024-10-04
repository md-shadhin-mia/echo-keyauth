import { useContext, useState } from 'react'
import Button from '@/components/ui/Button'
import Dialog from '@/components/ui/Dialog'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import type { MouseEvent } from 'react'
import { AddRealmFromContext } from './SelectRealm'
import * as Yup from 'yup'
import Input from '@/components/ui/Input'

type AddRealmProps = {

}

const AddRealm = () => {
    const { open, setOpen } = useContext(AddRealmFromContext)
    // const [dialogIsOpen, setIsOpen] = useState(false)

    const openDialog = () => {
        setOpen(true)
    }

    const onDialogClose = (e: MouseEvent) => {
        console.log('onDialogClose', e)
        setOpen(false)
    }

    const onDialogOk = (values: any, { setSubmitting }: any) => {

        setSubmitting(false)
    }

    const initialValues = {
        name: '',
        slug: '',
    }

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Please input realm name!'),
        slug: Yup.string()
            .min(3, 'Too Short!')
            .max(20, 'Too Long!')
            .required('Please input slug name!')
            .matches(/^[a-z0-9]+$/, 'Only letters & numbers Allowed'),
    })
    return (
        <Dialog
            isOpen={open}
            onClose={onDialogClose}
            onRequestClose={onDialogClose}
        >
            <h5 className="mb-4">Dialog Title</h5>
            <Formik
                initialValues={initialValues}
                onSubmit={onDialogOk}
                validationSchema={validationSchema}
            >
                {({ isSubmitting, values, handleChange, handleBlur }) => (
                    <Form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                Name
                            </label>
                            <Field
                                type="text"
                                name="name"
                                component={Input}
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            />
                            <ErrorMessage
                                name="name"
                                component="div"
                                className="text-red-500 text-xs italic"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="slug">
                                Slug
                            </label>
                            <Field
                                type="text"
                                name="slug"
                                component={Input}
                                value={values.name.toLowerCase().replace(/\s+/g, '-')}
                            />
                            <ErrorMessage
                                name="slug"
                                component="div"
                                className="text-red-500 text-xs italic"
                            />
                        </div>
                        <div className="text-right mt-6">
                            <Button
                                className="ltr:mr-2 rtl:ml-2"
                                variant="plain"
                                onClick={onDialogClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="solid"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                Okay
                            </Button>
                        </div>
                    </Form>
                )}
            </Formik>
        </Dialog>
    )
}

export default AddRealm;
