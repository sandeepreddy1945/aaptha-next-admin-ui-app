import { Alert, AlertDescription } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

export default async function Dashboard() {
  return (
    <div className="flex-1 w-full flex flex-col gap-12">
      <div className="w-full">
        <Alert>
        <Terminal className="h-4 w-4"></Terminal>
          <AlertDescription>
            This is a protected page that you can only see as an authenticated
            user
          </AlertDescription>
        </Alert>
      </div>
    </div>
  );
}
