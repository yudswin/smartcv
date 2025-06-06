import { Notification, NewsContent } from "@/constants/news";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/shadcn/card";


interface CardProps {
    notification: Notification
}

const renderContent = (content: NewsContent, idx: number) => {
    switch (content.type) {
        case "text":
            return <p key={idx} className="mb-2 last:mb-0 text-sm text-primary">{content.value}</p>;
        case "image":
            return (
                <div key={idx} className="flex flex-col items-center my-4">
                    <img src={content.src} alt={content.alt || "news image"} className="max-h-40 rounded-lg shadow" />
                    {content.caption && (
                        <span className="text-xs text-muted-foreground mt-2 italic text-center max-w-xs">{content.caption}</span>
                    )}
                </div>
            );
        case "code":
            return (
                <pre key={idx} className="bg-secondary text-primary rounded p-3 my-3 overflow-x-auto text-xs">
                    <code>{content.code}</code>
                </pre>
            );
        case "list":
            return (
                <ul key={idx} className="list-disc pl-6 mb-2 text-sm text-primary">
                    {content.items.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
            );
        case "bold":
            return <p key={idx} className="mb-2 last:mb-0 text-sm font-bold text-primary">{content.value}</p>;
        default:
            return null;
    }
};

const NewsCard: React.FC<CardProps> = ({ notification }) => {
    return (
        <div className={notification.pinned ? "relative" : undefined}>
            {notification.pinned && (
                <div className="absolute right-4 top-4 z-10">
                    <span className="inline-flex items-center px-2 py-0.5 rounded bg-yellow-200 text-yellow-800 text-xs font-semibold shadow">PINNED</span>
                </div>
            )}
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-3">
                        <img src={notification.avatarPath} alt={notification.name} className="w-8 h-8 rounded-full" />
                        <div>
                            <CardTitle>{notification.title}</CardTitle>
                            <CardDescription className="text-xs text-gray-400">
                                {notification.name} &bull; {notification.date.toLocaleDateString()}
                            </CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    {notification.content.map(renderContent)}
                </CardContent>
            </Card>
        </div>
    );
};

export { NewsCard };