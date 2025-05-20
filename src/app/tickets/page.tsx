import Link from "next/link";
import { initialTickets } from "../../data";

const TicketsPage = () => {
  return (
    <div>
      <h2 className="text-xl bg-amber-500">Tickets Page</h2>
      <table className="border-collapse">
        <thead>
          <tr>
            <th className="border">Ticket Id</th>
            <th className="border">Ticket Title</th>
            <th className="border">Ticket Content</th>
            <th className="border">Ticket Status</th>
            <th className="border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {initialTickets.map((ticket) => (
            <tr key={ticket.id}>
              <td className="border">{ticket.id}</td>
              <td className="border">{ticket.title}</td>
              <td className="border">{ticket.content}</td>
              <td className="border">{ticket.status}</td>
              <td className="border">
                <Link href={`/tickets/${ticket.id}`}>
                  View - {ticket.title}
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TicketsPage;
