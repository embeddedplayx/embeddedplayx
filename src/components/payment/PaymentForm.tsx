import React, { useState } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';
import '../styles/components/PaymentForm.scss';

interface PaymentFormProps {
  amount: number;
  onSubmit: (formData: PaymentFormData) => void;
  isLoading?: boolean;
}

export interface PaymentFormData {
  cardNumber: string;
  cardHolder: string;
  expiryDate: string;
  cvv: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({
  amount,
  onSubmit,
  isLoading = false
}) => {
  const [formData, setFormData] = useState<PaymentFormData>({
    cardNumber: '',
    cardHolder: '',
    expiryDate: '',
    cvv: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="payment-form">
      <div className="payment-form__header">
        <h3 className="payment-form__title">Payment Details</h3>
        <div className="payment-form__amount">
          ${amount.toFixed(2)}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="payment-form__form">
        <Input
          label="Card Number"
          name="cardNumber"
          value={formData.cardNumber}
          onChange={handleInputChange}
          placeholder="1234 5678 9012 3456"
          required
        />

        <Input
          label="Card Holder"
          name="cardHolder"
          value={formData.cardHolder}
          onChange={handleInputChange}
          placeholder="John Doe"
          required
        />

        <div className="payment-form__row">
          <Input
            label="Expiry Date"
            name="expiryDate"
            value={formData.expiryDate}
            onChange={handleInputChange}
            placeholder="MM/YY"
            required
          />

          <Input
            label="CVV"
            name="cvv"
            value={formData.cvv}
            onChange={handleInputChange}
            placeholder="123"
            type="password"
            required
          />
        </div>

        <Button
          type="submit"
          fullWidth
          isLoading={isLoading}
        >
          Pay ${amount.toFixed(2)}
        </Button>
      </form>

      <div className="payment-form__footer">
        <p>Your payment is secure. We use SSL encryption.</p>
      </div>
    </div>
  );
};

export default PaymentForm;