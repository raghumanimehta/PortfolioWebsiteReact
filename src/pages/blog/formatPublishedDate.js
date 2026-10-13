const DAY_MS = 24 * 60 * 60 * 1000;
const WEEK_MS = 7 * DAY_MS;

export function formatPublishedDate(publishedAt, now = Date.now()) {
    // Date-only entries represent midnight in the reader's local timezone.
    const date = new Date(/^\d{4}-\d{2}-\d{2}$/.test(publishedAt)
        ? `${publishedAt}T00:00:00`
        : publishedAt);
    const age = now - date.getTime();

    if (age >= 0 && age < WEEK_MS) {
        const days = Math.floor(age / DAY_MS);
        if (days === 0) return "Posted today";
        return `Posted ${days} ${days === 1 ? "day" : "days"} ago`;
    }

    return `Posted on ${date.toLocaleDateString("en-CA", {
        month: "long",
        day: "numeric",
        year: "numeric"
    })}`;
}
