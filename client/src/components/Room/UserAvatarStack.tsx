import { User } from "../../types";
export default function UserAvatarStack({ users }: { users: User[] }) {
  const displayUsers = users.length > 0 ? users : [{ id: '1', name: 'A', color: '#f7768e' }, { id: '2', name: 'B', color: '#7aa2f7' }];
  return (
    <div className="flex -space-x-2">
      {displayUsers.map(u => <div key={u.id} className="h-8 w-8 rounded-full ring-2 ring-surface flex items-center justify-center text-xs font-bold text-white uppercase" style={{ backgroundColor: u.color }}>{u.name.charAt(0)}</div>)}
    </div>
  );
}
