import { Employee } from "@/entities";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

export default function EmployeePhotoCard({
  employee,
}: {
  employee: Employee;
}) {
  return (
    <Card className="max-h-72 max-w-72" isFooterBlurred>
      <CardHeader className="absolute top-0 bg-black bg-opacity-25 z-10 ">
        <h1 className="font-bold text-xl text-white drop-shadow-sm">
          {employee.employeeName + " " + employee.employeeLastName}
        </h1>
      </CardHeader>
      <Divider />
      <CardBody>
        <Image
          src={employee.employeePhoto}
          className="z-0 object-cover"
          classNames={{ img: "siz-72" }}
        />
      </CardBody>
      <CardFooter className="absolute bottom-0 py-2 h-14">
        <Link href={`/dashboard/employees/${employee.employeeId}`}>
          <Button variant="ghost">Actualizar datos</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
