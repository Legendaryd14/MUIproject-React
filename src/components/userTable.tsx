import { Table } from "antd";
import { Columns } from "../constans/colums";
import { Users } from "../constans/muk-data";

function UserTableComponent() {
	return (
		<div>
			<Table dataSource={Users} columns={Columns} />
		</div>
	);
}

export default UserTableComponent;
