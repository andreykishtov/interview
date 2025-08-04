## 🧱 Timeline Component Code

```jsx
import React from "react";

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-title">
            <div className="timeline-date">{event.date}</div>
            <div className="timeline-actions">
              <button onClick={() => alert("Edit " + index)}>✏️</button>
              <button onClick={() => alert("Delete " + index)}>🗑️</button>
            </div>
          </div>
          <div className="timeline-content">
            <h4>{event.title}</h4>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
```

# Interview Questions: Timeline Component

Use the provided Timeline component as a base. The goal is to assess understanding of component design, code quality, React optimization, and architectural thinking.

---

## Structural & Code Review

### 1. What do you think about the structure of this component?
- What’s good about it?
- What issues do you see?

### 2. What are some concerns regarding testability or readability?

### 3. How would you break this component into smaller parts?
- What sub-components would you extract?
- What props would each one receive?

---

## Refactor & Reusability

### 4. How would you make the action buttons customizable per item?

### 5. What would you do if we wanted to support different layouts for different event types?


---

## Optimization & Advanced Patterns

### 6. Would `React.memo` be helpful here?
- Why or why not?
- Where would you use it?

### 7. Would `React.forwardRef` make sense in this context?
- When would you use it?
- Can you give a use case for it here?

---

## Bonus (Optional Open Discussion)

### 8. How would you make this timeline responsive for mobile?

### 9. How would you support drag-and-drop to reorder items?

### 10. How would you animate the addition or removal of items?