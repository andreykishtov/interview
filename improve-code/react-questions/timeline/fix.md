## Timeline.jsx 
```jsx
import React from "react";
import TimelineItem from "./TimelineItem";

const Timeline = ({ events, onEdit, onDelete }) => {
return (
<div className="timeline">
{events.map((event) => (
<TimelineItem
key={event.id}
event={event}
onEdit={() => onEdit(event)}
onDelete={() => onDelete(event)}
/>
))}
</div>
);
};

export default Timeline;

```


## TimelineItem.jsx
```jsx
import React from "react";
import TimelineTitle from "./TimelineTitle";
import TimelineContent from "./TimelineContent";
import TimelineActions from "./TimelineActions";

const TimelineItem = ({ event, onEdit, onDelete }) => (
  <div className="timeline-item">
    <TimelineTitle date={event.date}>
      <TimelineActions onEdit={onEdit} onDelete={onDelete} />
    </TimelineTitle>
    <TimelineContent title={event.title} description={event.description} />
  </div>
);

export default TimelineItem;
```


## TimelineTitle.jsx

```jsx
import React from "react";

const TimelineTitle = ({ date, children }) => (
  <div className="timeline-title">
    <div className="timeline-date">{date}</div>
    <div className="timeline-actions">{children}</div>
  </div>
);

export default TimelineTitle;
```

## TimelineActions.jsx
```jsx
import React from "react";

const TimelineActions = ({ onEdit, onDelete }) => (
<>
<button onClick={onEdit}>✏️</button>
<button onClick={onDelete}>🗑️</button>
</>
);

export default TimelineActions;
```

## TimelineContent.jsx
```jsx
import React from "react";

const TimelineContent = ({ title, description }) => (
  <div className="timeline-content">
    <h4>{title}</h4>
    <p>{description}</p>
  </div>
);

export default TimelineContent;
```