import React from "react";

const Timeline = ({ events }) => {
    return (
        <div className="space-y-6">
            {events.map((event, index) => (
                <div
                    className="border-l-4 border-blue-500 pl-4 relative"
                    key={index}
                >
                    <div className="flex justify-between items-center mb-2">
                        <div className="text-sm text-gray-500">{event.date}</div>
                        <div className="space-x-2">
                            <button
                                onClick={() => alert("Edit " + index)}
                                className="text-blue-600 hover:underline"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => alert("Delete " + index)}
                                className="text-red-600 hover:underline"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                    <div className="bg-white shadow p-4 rounded-md">
                        <h4 className="text-lg font-semibold text-gray-800">
                            {event.title}
                        </h4>
                        <p className="text-gray-600">{event.description}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
