export const conferenceFollowUp = {
  subject: "Driving Direct Bookings for Your Tours",
  body: `
Hi {{firstName}},

Great connecting at TTG Travel Experience!

At Omni Solutions, we craft:

• Custom booking engines that fit your brand
• White-label portals you can resell
• Data-driven marketing for your packages

Can we book a 15-min call next week to discuss how you can boost direct bookings by 30% before season's end?

Best,
Aaron Canham
Director, Omni Solutions
`
};

export const createOutreachSequence = (lead) => [
  {
    delay: 0,
    subject: conferenceFollowUp.subject,
    body: conferenceFollowUp.body.replace("{{firstName}}", lead.firstName),
  },
  {
    delay: 3, // days later
    subject: `Quick Check-In, ${lead.firstName}`,
    body: `
Hi ${lead.firstName},

Just circling back on our TTG chat.
Are you available for a quick screen share to walk through your booking workflow?

Cheers,
Aaron
    `,
  },
  {
    delay: 7,
    subject: "Last Note: Omni Solutions @ TTG",
    body: `
Hi ${lead.firstName},

I know things get busy. If you're still exploring new booking platforms or co-marketing opportunities, I'd love to help.

Thanks,
Aaron
    `,
  },
];