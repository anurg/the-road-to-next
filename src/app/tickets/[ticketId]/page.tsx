import { initialTickets } from "../../../data";

type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const TicketId = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  const ticket = initialTickets.find((ticket) => ticket.id === ticketId);
  if (!ticket) {
    return <h2>Ticket not found!</h2>;
  } else {
    return (
      <div>
        <h2>Ticket: {ticketId}</h2>
        <p>Title: {ticket.title}</p>
        <p>Status: {ticket.status}</p>
        <p>Status: {ticket.content}</p>
      </div>
    );
  }
};
export default TicketId;
// import { initialTickets } from "../../../data";

// type TicketPageProps = {
//   params: Promise<{
//     ticketId: string;
//   }>;
// };

// const TicketId = async ({ params }: TicketPageProps) => {
//   const { ticketId } = await params;
//   const ticket = initialTickets.find((ticket) => ticket.id === ticketId);

//   if (!ticket) {
//     return <h2>Ticket not found!</h2>;
//   } else {
//     return (
//       <div>
//         <h2>Ticket: {ticketId}</h2>
//         <p>Title: {ticket.title}</p>
//         <p>Status: {ticket.status}</p>
//         <p>Status: {ticket.content}</p>
//       </div>
//     );
//   }
// };

// export default TicketId;
