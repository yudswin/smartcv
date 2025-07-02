export interface DrawerItemProps {
    children: React.ReactNode;
    className?: string;
}

export const DrawerItem: React.FC<DrawerItemProps> = ({
    children,
    className = ""
}) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}