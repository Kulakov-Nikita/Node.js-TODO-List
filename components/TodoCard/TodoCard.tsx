"use client"

import { CardData } from "@/components/TodoCard/CardData"
import { useRouter } from "next/navigation"
import { useState } from "react"
import "./TodoCard.css"

export default function TodoCard({
  id,
  title,
  description,
  completed,
  removeCardFunc,
}: CardData & { removeCardFunc: (id: Number) => void }) {
  const [isCompleted, setIsCompleted] = useState(completed)
  const router = useRouter()

  return (
    <div className="todo-card">
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-desc">
          <strong>Цитата: </strong>
          <span className="card-desc-text">{description}</span>
        </div>
        <div className="card-status">
          <strong>Показания кринжометра: </strong>
          {isCompleted ? (
            <span className="status-done">Ну такое...</span>
          ) : (
            <span className="status-undone">Лютый кринж</span>
          )}
        </div>
      </div>
      <div className="card-icons">
        {/* Кнопка редактирования */}
        <button
          className="btn-icon edit-btn"
          onClick={() => router.push("/edit/" + id)}
        >
          Придраться к орфографии
        </button>

        {/* Кнопка удаления */}
        <button
          className="btn-icon remove-btn"
          onClick={() => removeCardFunc(id)}
        >
          Стереть с лица земли
        </button>
      </div>
    </div>
  )
}
