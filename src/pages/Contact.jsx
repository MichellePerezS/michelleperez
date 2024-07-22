import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  VStack,
  FormErrorMessage,
  useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";
import { sendEmail } from '../services/email';

export default function Contact() {
  const toast = useToast();

  return (
    <Box p={4} boxShadow="lg" borderRadius="md" maxW="600px" mx="auto">
      <Headline title="Contact" />
      <TitlePages title="Let's Work Together" />
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={Yup.object({
          name: Yup.string().required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
          subject: Yup.string().required('Required'),
          message: Yup.string().required('Required'),
        })}
        onSubmit={(values, actions) => {
          toast({
            title: "Mensaje enviado correctamente.",
            description: "Gracias por contactarme, me pondré en contacto contigo pronto.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });
          actions.resetForm();
          actions.setSubmitting(false);
        }}
      >
        {formik => (
          <Form>
            <VStack spacing={4}>
              <FormControl id="name" isInvalid={formik.touched.name && formik.errors.name}>
                <FormLabel>Name</FormLabel>
                <Field name="name" as={Input} placeholder="Your Name" />
                <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
              </FormControl>
              <FormControl id="email" isInvalid={formik.touched.email && formik.errors.email}>
                <FormLabel>Email</FormLabel>
                <Field name="email" type="email" as={Input} placeholder="tu@example.com" />
                <FormErrorMessage>{formik.errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl id="subject" isInvalid={formik.touched.subject && formik.errors.subject}>
                <FormLabel>Subject</FormLabel>
                <Field name="subject" as={Input} placeholder="Subject" />
                <FormErrorMessage>{formik.errors.subject}</FormErrorMessage>
              </FormControl>
              <FormControl id="message" isInvalid={formik.touched.message && formik.errors.message}>
                <FormLabel>Message</FormLabel>
                <Field name="message" as={Textarea} placeholder="Your message" />
                <FormErrorMessage>{formik.errors.message}</FormErrorMessage>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full" isLoading={formik.isSubmitting}>
                Submit
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
};