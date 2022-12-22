import React from 'react';
import { useFormik, FormikProps } from 'formik';

import type { CreateInitialData } from '__types__';

import { Block } from 'components';

type WithValidateBlock<T extends CreateInitialData> = (Wrapper: React.FunctionComponent<{ formik: FormikProps<ReturnType<T>['initialState']> }>, createInitialData: T) => React.FunctionComponent;

export const withValidateBlock: WithValidateBlock<CreateInitialData> = (Wrapper, createInitialData) => {

    return () => {
        const { initialState, dataBlog, validateSchema } = React.useMemo(() => createInitialData(), []);

        const formik = useFormik({
            initialValues: initialState,
            validationSchema: validateSchema,
            onSubmit: values => {

                alert(JSON.stringify(values, null, 2));
            },
        });

        const handlerSubmit = async (e: any) => {
            e.preventDefault();
            await formik.submitForm();
        };

        return (
            <Block
                className={dataBlog.className}
                to={dataBlog.to}
                titleLink={dataBlog.titleLink}
                handlerSubmit={handlerSubmit}
            >
                <Wrapper formik={formik} />
            </Block>
        );
    };
};
