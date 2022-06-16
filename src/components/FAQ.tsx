import * as React from 'react';
import AccordianContent from './AccordianContent';
import { Typography } from '@mui/material';
const faqs=[
    {
    heading:"How Guess Ball Works?",
    content:"On GuessBall, you create your fantasy team based on a real-life match to score maximum points and win exciting cash prizes worth Crores!"
    },
    {
    heading:"Can I actually win money on GuessBall?",
    content:"Absolutely! Lots of players have already won big prizes on GuessBall and you can too. We host different kinds of cash contests, each with its own entry fee and prize money.Choose a contest that you want to play, defeat the competition, and celebrate big wins!"
    },
    {
    heading:"Is it safe to add money to GuessBall?",
    content:"Adding money to your GuessBall account is both simple and safe. We have many different payment options enabled on GuessBall and work hard to ensure that your personal details are safe with us. What's more, after you verify your personal details, you can withdraw the money that you win on GuessBall directly to your bank account."
    },
    {
        heading:"How are GuessBall points calculated?",
        content:"Yes, to link wallets, head to My Balance > Manage Payments and tap on Link Account to link your Paytm/PhonePe wallets. Follow the on-screen instructions, and authenticate using the OTP sent to your number. PS: Your Paytm/ PhonePe wallets should be linked with the same mobile number you've registered on GuessBall."
    },
    {
        heading:"Can GuessBall be played outside India?",
        content: "GuessBall is only open to residents of India, so a player from abroad cannot register or play on GuessBall."
    },
    // {
    //     heading:"When does GuessBall credit the winning amount?",
    //     content:"Usually, IMPS withdrawals can take up to 3 working days to get credited. NEFT withdrawals can take up to 3 working days to get credited."
    // },
    // {
    //     heading:"How do I use the GuessBall coupon code?",
    //     content:"You can avail promo code for GuessBall through the following steps: Launch the GuessBall appCheck out the My Coupons section on the menu Tap on APPLY or join contests to get the discount coupon"
    // },
    // {
    //     heading:"Which GuessBall app to download?",
    //     content:"Download the official GuessBall Android app from our website. Fantasy sports apps that allow you to win money are not available on the Google Play Store."
    // },
];

export default function Faq() {
  return (
      <>
    <Typography variant='h5' color='black' sx={{ margin: 'auto' }}>
    Frequently Asked Questions
  </Typography>
  <br/>
  <br/>
    <div className='accordian-div'>
        {faqs.map((element)=>{
            return <AccordianContent heading={element.heading} content={element.content}></AccordianContent>
        })}

    </div>
    </>
  );
}
