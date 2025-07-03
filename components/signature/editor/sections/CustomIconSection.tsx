"use client"
import { useRef, ChangeEvent } from 'react';
import { Input } from '@/components/shadcn/input';
import { Label } from '@/components/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Upload, X } from 'lucide-react';

interface CustomIconSectionProps {
    customIcon: File | null;
    onUpdate: (file: File | null) => void;
}

const CustomIconSection = ({ customIcon, onUpdate }: CustomIconSectionProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onUpdate(file);
    };

    const handleRemoveFile = () => {
        onUpdate(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Custom Social Icons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="custom-icon-upload">Upload Custom Icon</Label>
                    <p className="text-sm text-muted-foreground">
                        Upload a custom icon to replace the default social media icons above. This will automatically add a field to the Social Media Links section.
                    </p>
                    <div className="flex items-center gap-2">
                        <Input
                            ref={fileInputRef}
                            id="custom-icon-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                        />
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => fileInputRef.current?.click()}
                            className="flex items-center gap-2"
                        >
                            <Upload size={16} />
                            Choose Custom Icon
                        </Button>
                        {customIcon && (
                            <>
                                <span className="text-sm text-muted-foreground">
                                    {customIcon.name}
                                </span>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    size="sm"
                                    onClick={handleRemoveFile}
                                >
                                    <X size={16} />
                                </Button>
                            </>
                        )}
                    </div>
                    {!customIcon ? (
                        <p className="text-xs text-muted-foreground">
                            No custom icon uploaded. When you upload an icon, it will automatically create a new social media field above.
                        </p>
                    ) : (
                        <p className="text-xs text-green-600">
                            ✓ Custom icon uploaded and added to social media links above.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomIconSection;
