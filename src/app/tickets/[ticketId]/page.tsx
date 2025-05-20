type TicketPageProps = {
  params: Promise<{
    ticketId: string;
  }>;
};
const TicketId = async ({ params }: TicketPageProps) => {
  const { ticketId } = await params;
  return <h2>TicketId {ticketId}</h2>;
};
export default TicketId;
