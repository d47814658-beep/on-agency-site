"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Calendar20({ onBookingConfirm }: { onBookingConfirm?: (date: Date, time: string) => void }) {
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = React.useState<string | null>("10:00")
  
  const timeSlots = Array.from({ length: 37 }, (_, i) => {
    const totalMinutes = i * 15
    const hour = Math.floor(totalMinutes / 60) + 9
    const minute = totalMinutes % 60
    return `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`
  })

  // Mock some booked dates in the future
  const today = new Date()
  const bookedDates = Array.from(
    { length: 3 },
    (_, i) => new Date(today.getFullYear(), today.getMonth(), today.getDate() + 2 + i)
  )

  const handleContinue = () => {
    if (date && selectedTime && onBookingConfirm) {
      onBookingConfirm(date, selectedTime)
    }
  }

  return (
    <Card className="gap-0 p-0 shadow-none border-0">
      <CardContent className="relative p-0 md:pr-48">
        <div className="p-6">
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={date}
            disabled={bookedDates}
            showOutsideDays={false}
            modifiers={{
              booked: bookedDates,
            }}
            modifiersClassNames={{
              booked: "[&>button]:line-through opacity-50 cursor-not-allowed",
            }}
            className="bg-transparent p-0 [--cell-size:--spacing(10)] md:[--cell-size:--spacing(12)]"
            formatters={{
              formatWeekdayName: (date) => {
                return date.toLocaleString("en-US", { weekday: "short" })
              },
            }}
          />
        </div>
        <div className="no-scrollbar inset-y-0 right-0 flex max-h-72 w-full scroll-pb-6 flex-col gap-4 overflow-y-auto border-t p-6 md:absolute md:max-h-none md:w-48 md:border-t-0 md:border-l border-gray-100 dark:border-neutral-800">
          <div className="grid gap-2">
            {timeSlots.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                onClick={() => setSelectedTime(time)}
                className={`w-full shadow-none ${selectedTime === time ? 'bg-black text-white dark:bg-white dark:text-black' : 'hover:bg-gray-100 dark:hover:bg-neutral-800'}`}
              >
                {time}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4 border-t border-gray-100 dark:border-neutral-800 px-6 !py-5 md:flex-row">
        <div className="text-sm text-gray-600 dark:text-gray-300">
          {date && selectedTime ? (
            <>
              Meeting booked for{" "}
              <span className="font-medium text-black dark:text-white">
                {" "}
                {date?.toLocaleDateString("en-US", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}{" "}
              </span>
              at <span className="font-medium text-black dark:text-white">{selectedTime}</span>.
            </>
          ) : (
            <>Select a date and time for your meeting.</>
          )}
        </div>
        <Button
          disabled={!date || !selectedTime}
          onClick={handleContinue}
          className="w-full md:ml-auto md:w-auto bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200"
        >
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
}
