// src/components/RegistrationForm/RegistrationForm.js
import React, { useState } from 'react';
import {
  PageContainer,
  FormContainer,
  TitleContainer,
  Heading,
  Form,
  Label,
  Input,
  Select,
  Button,
  SuccessMessage,
  ErrorMessage,
} from './RegistrationFormStyles';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    panNumber: '',
    loanType: '',
    loanAmount: '',
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setSuccess(true);
      setError('');
    } catch (error) {
      setSuccess(false);
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
    <FormContainer>
      <TitleContainer>
        <Heading>Registration Form</Heading>
      </TitleContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </Label>

        <Label>
          Phone Number:
          <Input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            pattern="[0-9]{10}"
            required
          />
        </Label>

        <Label>
          Email:
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          PAN Number:
          <Input
            type="text"
            name="panNumber"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </Label>

        <Label>
          Type of Loan Required:
          <Select name="loanType" value={formData.loanType} onChange={handleChange} required>
            <option value="">Select Loan Type</option>
            <option value="personal">Personal Loan</option>
            <option value="business">Business Loan</option>
          </Select>
        </Label>

        <Label>
          Loan Amount:
          <Input
            type="number"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
        </Label>

        <Button type="submit" disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>

      {success && <SuccessMessage>Form submitted successfully!</SuccessMessage>}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </FormContainer>
    </PageContainer>
  );
};

export default RegistrationForm;
