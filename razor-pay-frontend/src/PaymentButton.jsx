import React from "react";
import axios from "axios";

function PaymentButton() {
  const handlePayment = async () => {
    try {
      // Step 1: Create order on backend
      const { data: order } = await axios.post("http://localhost:3000/api/payments/create-order", {
        amount: 500 // Amount in INR
      });

      // Step 2: Razorpay options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // from .env (frontend can use only key_id)
        amount: order.amount,
        currency: order.currency,
        name: "My Company",
        description: "Test Transaction",
        order_id: order.id,
        handler: async function (response) {
          const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = response;
          try {
            await axios.post("http://localhost:3000/api/payments/verify", {
              razorpayOrderId: razorpay_order_id,
              razorpayPaymentId: razorpay_payment_id,
              signature: razorpay_signature,
            });
            alert("Payment successful!");
          } catch (err) {
            alert("Payment verification failed!");
            console.log(err)
          }
        },
        prefill: {
          name: "Test User",
          email: "test@example.com",
          contact: "9999999999"
        },
        theme: {
          color: "#3399cc"
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button onClick={handlePayment} style={{ padding: "10px 20px", color: "#fff", border: "none", borderRadius: "5px" }}>
      Pay Now
    </button>
  );
}

export default PaymentButton;