// src/pages/Contact.jsx
import React, { useState } from 'react';
import {
  Box, Button, FormControl, FormLabel, Input, Textarea, VStack,
  FormErrorMessage, useToast, VisuallyHidden, HStack, Text, useColorModeValue
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import Headline from "../components/Headline";
import TitlePages from "../components/TitlePages";
import { sendEmail } from '../services/email';

const ContactSchema = Yup.object({
  name: Yup.string().trim().min(2, 'Too short').max(80, 'Too long').required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  subject: Yup.string().trim().min(3, 'Too short').max(120, 'Too long').required('Required'),
  message: Yup.string().trim().min(10, 'Please provide more details').max(2000, 'Too long').required('Required'),
  company: Yup.string().max(0, 'Spam detected'),
});

export default function Contact() {
  const toast = useToast();
  const [chars, setChars] = useState(0);
  const hintColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <Box p={4} boxShadow="lg" borderRadius="md" maxW="600px" mx="auto">
      <Headline title="Contact" />
      <TitlePages title="Let's Work Together" />

      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '', company: '' }}
        validationSchema={ContactSchema}
        onSubmit={async (values, actions) => {
          try {
            if (values.company) {
              actions.setSubmitting(false);
              return;
            }
            const templateParams = {
              from_name: values.name,
              from_email: values.email,
              subject: values.subject,
              message: values.message,
            };
            await sendEmail(templateParams);
            toast({
              title: 'Message sent successfully ✉️',
              description: 'Thanks for reaching out, I will get back to you shortly.',
              status: 'success',
              duration: 5000,
              isClosable: true,
            });
            actions.resetForm();
          } catch (err) {
            console.error('Error sending email:', err);
            toast({
              title: 'Something went wrong ❌',
              description: 'Your message could not be sent. Please try again later.',
              status: 'error',
              duration: 6000,
              isClosable: true,
            });
          } finally {
            actions.setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting, isValid, dirty }) => (
          <Form noValidate>
            <VStack spacing={4} align="stretch">
              <VisuallyHidden>
                <Field name="company" as={Input} tabIndex={-1} autoComplete="off" />
              </VisuallyHidden>

              <FormControl id="name">
                <FormLabel>Full Name</FormLabel>
                <Field
                  as={Input}
                  name="name"
                  placeholder="Enter your full name"
                  autoComplete="name"
                  required
                />
                <FormErrorMessage name="name" component={Text} color="red.400" />
              </FormControl>

              <FormControl id="email">
                <FormLabel>Email Address</FormLabel>
                <Field
                  as={Input}
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder="Enter your email address"
                  required
                />
                <FormErrorMessage name="email" component={Text} color="red.400" />
              </FormControl>

              <FormControl id="subject">
                <FormLabel>Subject</FormLabel>
                <Field
                  as={Input}
                  name="subject"
                  placeholder="Enter the subject"
                  autoComplete="on"
                  required
                />
                <FormErrorMessage name="subject" component={Text} color="red.400" />
              </FormControl>

              <FormControl id="message">
                <FormLabel>Message</FormLabel>
                <Field
                  as={Textarea}
                  name="message"
                  placeholder="Write your message here..."
                  autoComplete="on"
                  minH="140px"
                  resize="vertical"
                  onChange={(e) => {
                    setChars(e.target.value.length);
                    e.target.form?.dispatchEvent(new Event('input', { bubbles: true }));
                  }}
                />
                <HStack justify="space-between" mt={1}>
                  <FormErrorMessage name="message" component={Text} color="red.400" />
                  <Text fontSize="sm" color={hintColor}>{chars}/2000</Text>
                </HStack>
              </FormControl>

              <Button
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={isSubmitting}
                isDisabled={!dirty || !isValid || isSubmitting}
              >
                Send Message
              </Button>
            </VStack>
          </Form>
        )}
      </Formik>
    </Box>
  );
}