import React from 'react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import '../styles/components/Card.scss';
import '../styles/components/Pricing.scss';

const Pricing: React.FC = () => {
  const plans = [
    {
      id: 'basic',
      title: 'Basic',
      price: 9.99,
      features: [
        'Access to 10 games',
        'Basic support',
        'No ads',
        'Standard quality'
      ]
    },
    {
      id: 'pro',
      title: 'Pro',
      price: 19.99,
      features: [
        'Access to all games',
        'Priority support',
        'No ads',
        'HD quality',
        'Early access to new games'
      ],
      recommended: true
    },
    {
      id: 'premium',
      title: 'Premium',
      price: 29.99,
      features: [
        'Access to all games',
        '24/7 support',
        'No ads',
        '4K quality',
        'Early access to new games',
        'Exclusive content'
      ]
    }
  ];

  return (
    <div className="pricing-page">
      <h1>Choose Your Plan</h1>
      <div className="pricing-grid">
        {plans.map(plan => (
          <Card key={plan.id} className={`pricing-card ${plan.recommended ? 'recommended' : ''}`}>
            <h2>{plan.title}</h2>
            <div className="price">
              <span className="currency">$</span>
              <span className="amount">{plan.price}</span>
              <span className="period">/month</span>
            </div>
            <ul className="features">
              {plan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Button variant={plan.recommended ? 'primary' : 'secondary'}>
              Choose {plan.title}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Pricing;