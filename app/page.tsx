import TodoList from "@/components/TodoList/TodoList"
import { Metadata } from "next"
import Title from "../components/PageTitle/PageTitle"
import background from "/img/background.jpg";

export const metadata: Metadata = {
	title: "Домашние работы",
	description: "VSTU - Web - Lab 4",
}

export default function Home() {
	return (
		<div>
			<Title title="Домашние работы"></Title>
			<TodoList />
		</div>
	)
}
