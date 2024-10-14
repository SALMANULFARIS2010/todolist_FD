// import React from 'react';

// const SubscriptionPlans = () => {
//   const handlePayment = (plan) => {
//     // Configure Razorpay options
//     const options = {
//       key: "rzp_test_UbO64PA73Xw9ou", // Enter the Key ID generated from the Dashboard
//       amount: plan.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise or INR 500
//       currency: "INR",
//       name: "Your Company Name",
//       description: plan.description,
//       image: "https://yourdomain.com/your_logo.png",
//       handler: function (response) {
//         // Handle successful payment here
//         alert(`Payment successful: ${response.razorpay_payment_id}`);
//       },
//       prefill: {
//         name: "User's Name",
//         email: "user@example.com",
//         contact: "9999999999"
//       },
//       theme: {
//         color: "#3399cc"
//       }
//     };
    
//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   return (
//     <div>
//       <h1>Select a Plan</h1>
//       <div>
//         <h2>Basic Plan</h2>
//         <p>Price: ₹10</p>
//         <button onClick={() => handlePayment({amount: 10000, description: 'Basic Plan'})}>Pay</button>
//       </div>
//       <div>
//         <h2>Standard Plan</h2>
//         <p>Price: ₹500</p>
//         <button onClick={() => handlePayment({amount: 20000, description: 'Standard Plan'})}>Pay</button>
//       </div>
//       {/* <div>
//         <h2>Pro Plan</h2>
//         <p>Price: ₹1000</p>
//         <button onClick={() => handlePayment({amount: 30000, description: 'Pro Plan'})}>Pay</button>
//       </div> */}
//     </div>
//   );
// };

// export default SubscriptionPlans;


// import React from 'react';

// const SubscriptionPlans = () => {
//   // Define the plan details
//   const plans = {
//     basic: {
//       amount: 1000, // Subscription amount in smallest currency unit (e.g., paise for INR)
//       description: 'Basic Plan',
//       planId: 'plan_OszcH23OUZdP4P'
//     },
//     standard: {
//       amount: 20000,
//       description: 'Standard Plan',
//       planId: 'plan_Ovw8omlfo2lwDK'
//     },
//     pro: {
//       amount: 30000,
//       description: 'Pro Plan',
//       planId: 'plan_Ovw8omlfo2lwDK' // Assuming you have a plan ID for Pro Plan
//     }
//   };

 
//   const handlePayment = async (planType) => {
//     const plan = plans[planType];
//     if (!plan) {
//         console.error('Invalid plan type');
//         return;
//     }

//     try {
//         const response = await fetch('http://localhost:9000/create-subscription', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({
//                 amount: plan.amount,
//                 currency: 'INR',
//                 plan_description: plan.description,
//                 plan_id: plan.planId,
//             }),
//         });

//         const data = await response.json();
//         if (response.ok) {
//             if (data.subscription_id) {
//                 console.log('Subscription created successfully:', data);
//                 handleRazorpayPayment(data); // Pass the response data to Razorpay
//             } else {
//                 console.error('Failed to create subscription:', data);
//             }
//         } else {
//             console.error('Failed to create subscription with status:', response.status);
//             console.error('Response body:', data);
//         }
//     } catch (error) {
//         console.error('Error during subscription creation:', error);
//     }
// };

//   // Function to verify payment on backend
//   const verifyPayment = async (response) => {
//     try {
//       const verificationResponse = await fetch('http://localhost:9000/verify-payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_signature: response.razorpay_signature,
//         }),
//       });

//       const verificationData = await verificationResponse.json();

//       if (verificationData.success) {
//         alert('Payment verified successfully!');
//       } else {
//         alert('Payment verification failed. Please contact support.');
//       }
//     } catch (error) {
//       console.error('Error verifying payment:', error);
//       alert('Error verifying payment. Please try again.');
//     }
//   };

//   // Function to handle Razorpay payment
//   const handleRazorpayPayment = (subscriptionData) => {
//     const options = {
//       key: "rzp_test_UbO64PA73Xw9ou", // Replace with your Razorpay key
//       subscription_id: subscriptionData.subscription_id,
//       amount: subscriptionData.amount,
//       currency: 'INR',
//       name: "Your Company Name",
//       description: subscriptionData.plan_description,
//       handler: function (response) {
//         console.log("Payment successful:", response);
//         verifyPayment(response); // Call the backend to verify payment
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div>
//       <h1>Select a Plan</h1>
//       <div>
//         <h2>Basic Plan</h2>
//         <p>Price: ₹10</p>
//         <button onClick={() => handlePayment('basic')}>
//           Pay
//         </button>
//       </div>
//       <div>
//         <h2>Standard Plan</h2>
//         <p>Price: ₹200</p>
//         <button onClick={() => handlePayment('standard')}>
//           Pay
//         </button>
//       </div>
//       <div>
//         <h2>Pro Plan</h2>
//         <p>Price: ₹1000</p>
//         <button onClick={() => handlePayment('pro')}>
//           Pay
//         </button>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPlans;






// import React from 'react';

// const SubscriptionPlans = () => {
//   // Define the plan details
//   const plans = {
//     basic: {
//       amount: 1000, // Amount in paise (10 INR)
//       description: 'Basic Plan',
//       planId: 'plan_OszcH23OUZdP4P' // Update with actual plan ID from Razorpay
//     },
//     standard: {
//       amount: 20000, // Amount in paise (200 INR)
//       description: 'Standard Plan',
//       planId: 'plan_Ovw8omlfo2lwDK' // Update with actual plan ID
//     },
//     pro: {
//       amount: 30000, // Amount in paise (300 INR)
//       description: 'Pro Plan',
//       planId: 'plan_Ovw8omlfo2lwDK' // Update with actual plan ID
//     }
//   };

//   const handlePayment = async (planType) => {
//     const plan = plans[planType];
//     if (!plan) {
//       console.error('Invalid plan type');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:9000/create-subscription', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           amount: plan.amount,
//           currency: 'INR',
//           plan_description: plan.description,
//           plan_id: plan.planId,
//         }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         if (data.subscription_id) {
//           console.log('Subscription created successfully:', data);
//           handleRazorpayPayment(data); // Initiate Razorpay payment
//         } else {
//           console.error('Failed to create subscription:', data);
//         }
//       } else {
//         console.error('Failed to create subscription with status:', response.status);
//         console.error('Response body:', data);
//       }
//     } catch (error) {
//       console.error('Error during subscription creation:', error);
//     }
//   };

//   // Function to verify payment on the backend
//   const verifyPayment = async (response) => {
//     try {
//       const verificationResponse = await fetch('http://localhost:9000/verify-payment', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           razorpay_order_id: response.razorpay_order_id,
//           razorpay_payment_id: response.razorpay_payment_id,
//           razorpay_signature: response.razorpay_signature,
//         }),
//       });

//       const verificationData = await verificationResponse.json();

//       if (verificationData.success) {
//         alert('Payment verified successfully!');
//       } else {
//         alert('Payment verification failed. Please contact support.');
//       }
//     } catch (error) {
//       console.error('Error verifying payment:', error);
//       alert('Error verifying payment. Please try again.');
//     }
//   };

//   // Function to handle Razorpay payment
//   const handleRazorpayPayment = (subscriptionData) => {
//     const options = {
//       key_id: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add your Razorpay key
//       subscription_id: subscriptionData.subscription_id,
//       amount: subscriptionData.amount,
//       currency: 'INR',
//       name: "Your Company Name",
//       description: subscriptionData.plan_description,
//       handler: function (response) {
//         console.log("Payment successful:", response);
//         verifyPayment(response); // Verify the payment after completion
//       },
//       prefill: {
//         name: "Customer Name",
//         email: "customer@example.com",
//         contact: "9999999999",
//       },
//       theme: {
//         color: "#F37254",
//       },
//     };

//     const rzp1 = new window.Razorpay(options);
//     rzp1.open();
//   };

//   return (
//     <div>
//       <h1>Select a Plan</h1>
//       <div>
//         <h2>Basic Plan</h2>
//         <p>Price: ₹10</p>
//         <button onClick={() => handlePayment('basic')}>Subscribe</button>
//       </div>
//       <div>
//         <h2>Standard Plan</h2>
//         <p>Price: ₹200</p>
//         <button onClick={() => handlePayment('standard')}>Subscribe</button>
//       </div>
//       <div>
//         <h2>Pro Plan</h2>
//         <p>Price: ₹300</p>
//         <button onClick={() => handlePayment('pro')}>Subscribe</button>
//       </div>
//     </div>
//   );
// };

// export default SubscriptionPlans;


import React from 'react';

const SubscriptionPlans = () => {
  // Define the plan details
  const plans = {
    basic: {
      amount: 1000, // Amount in paise (10 INR)
      description: 'Basic Plan',
      planId: 'plan_OszcH23OUZdP4P' // Update with actual plan ID from Razorpay
    },
    standard: {
      amount: 20000, // Amount in paise (200 INR)
      description: 'Standard Plan',
      planId: 'plan_Ovw8omlfo2lwDK' // Update with actual plan ID
    },
    pro: {
      amount: 30000, // Amount in paise (300 INR)
      description: 'Pro Plan',
      planId: 'plan_Ovw8omlfo2lwDK' // Update with actual plan ID
    }
  };

  const handlePayment = async (planType) => {
    const plan = plans[planType];
    if (!plan) {
      console.error('Invalid plan type');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/create-subscription', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: plan.amount,
          currency: 'INR',
          plan_description: plan.description,
          plan_id: plan.planId,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        if (data.subscription_id) {
          console.log('Subscription created successfully:', data);
          handleRazorpayPayment(data); // Initiate Razorpay payment
        } else {
          console.error('Failed to create subscription:', data);
        }
      } else {
        console.error('Failed to create subscription with status:', response.status);
        console.error('Response body:', data);
      }
    } catch (error) {
      console.error('Error during subscription creation:', error);
    }
  };

  // Function to verify payment on the backend
  const verifyPayment = async (response) => {
    try {
      const verificationResponse = await fetch('http://localhost:9000/verify-payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          razorpay_order_id: response.razorpay_order_id,
          razorpay_payment_id: response.razorpay_payment_id,
          razorpay_signature: response.razorpay_signature,
        }),
      });

      const verificationData = await verificationResponse.json();

      if (verificationData.success) {
        alert('Payment verified successfully!');
      } else {
        alert('Payment verification failed. Please contact support.');
      }
    } catch (error) {
      console.error('Error verifying payment:', error);
      alert('Error verifying payment. Please try again.');
    }
  };

  // Function to handle Razorpay payment
  const handleRazorpayPayment = (subscriptionData) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY_ID, // Add your Razorpay key from env variables
      subscription_id: subscriptionData.subscription_id,
      amount: subscriptionData.amount,
      currency: 'INR',
      name: "Your Company Name",
      description: subscriptionData.plan_description,
      handler: function (response) {
        console.log("Payment successful:", response);
        verifyPayment(response); // Verify the payment after completion
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div>
      <h1>Select a Plan</h1>
      <div style={styles.planContainer}>
        {Object.keys(plans).map((planType) => (
          <div key={planType} style={styles.planCard}>
            <h2>{plans[planType].description}</h2>
            <p>Price: ₹{plans[planType].amount / 100}</p>
            <button
              style={styles.subscribeButton}
              onClick={() => handlePayment(planType)}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  planContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '20px',
  },
  planCard: {
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '8px',
    textAlign: 'center',
    width: '250px',
    backgroundColor: '#f9f9f9',
  },
  subscribeButton: {
    backgroundColor: '#F37254',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    marginTop: '10px',
  },
};

export default SubscriptionPlans;
