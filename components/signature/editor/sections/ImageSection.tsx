"use client"
import { useRef, ChangeEvent } from 'react';
import { Input } from '@/components/shadcn/input';
import { Label } from '@/components/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Upload, User, X } from 'lucide-react';
import { ImageData } from '@/types/signature.interface';

interface ImageSectionProps {
    data: ImageData;
    onUpdate: (field: keyof ImageData, value: any) => void;
}

const ImageSection = ({ data, onUpdate }: ImageSectionProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        onUpdate('file', file);
    };

    const handleRemoveFile = () => {
        onUpdate('file', null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleWidthChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        onUpdate('width', value);
    };

    return (
        <div className='space-y-4 '>
            <h2 className="xl:text-xl flex items-center xl:justify-center gap-2 pt-2">
                <User size={20}/>
                Profile Image
            </h2>
            <div className="space-y-4 px-4">
                <div className="space-y-2">
                    <Label htmlFor="image-upload">Upload Image</Label>
                    <div className="flex items-center gap-2">
                        <Input
                            ref={fileInputRef}
                            id="image-upload"
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
                            Choose Image
                        </Button>
                        {data.file && (
                            <>
                                <span className="text-sm text-muted-foreground">
                                    {data.file.name}
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
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image-width">Width: {data.width}px</Label>
                    <Input
                        id="image-width"
                        type="range"
                        min="20"
                        max="200"
                        value={data.width}
                        onChange={handleWidthChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>20px</span>
                        <span>200px</span>
                    </div>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image-link">Link (optional)</Label>
                    <Input
                        id="image-link"
                        type="url"
                        placeholder="https://example.com"
                        value={data.link}
                        onChange={(e) => onUpdate('link', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
};

export default ImageSection;
