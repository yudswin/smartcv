"use client"
import { useRef, ChangeEvent } from 'react';
import { Input } from '@/components/shadcn/input';
import { Label } from '@/components/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Image, Upload, X } from 'lucide-react';
import { BannerData } from '@/types/signature.interface';

interface BannerSectionProps {
    data: BannerData;
    onUpdate: (field: keyof BannerData, value: any) => void;
}

const BannerSection = ({ data, onUpdate }: BannerSectionProps) => {
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
        <div className='space-y-4 pb-20'>
            <h2 className="xl:text-xl flex items-center xl:justify-center gap-2 pt-2">
                <Image />
                Banner
            </h2>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="banner-upload">Upload Banner</Label>
                    <div className="flex items-center gap-2">
                        <Input
                            ref={fileInputRef}
                            id="banner-upload"
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
                            Choose Banner
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

                {/* Width Slider */}
                <div className="space-y-2">
                    <Label htmlFor="banner-width">Width: {data.width}px</Label>
                    <Input
                        id="banner-width"
                        type="range"
                        min="100"
                        max="500"
                        value={data.width}
                        onChange={handleWidthChange}
                        className="w-full"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>100px</span>
                        <span>500px</span>
                    </div>
                </div>

                {/* Position Radio Selection */}
                <div className="space-y-2">
                    <Label>Position</Label>
                    <div className="flex gap-4">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="banner-position"
                                value="above"
                                checked={data.position === 'above'}
                                onChange={() => onUpdate('position', 'above')}
                                className="w-4 h-4"
                            />
                            <span>Above</span>
                        </label>
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input
                                type="radio"
                                name="banner-position"
                                value="below"
                                checked={data.position === 'below'}
                                onChange={() => onUpdate('position', 'below')}
                                className="w-4 h-4"
                            />
                            <span>Below</span>
                        </label>
                    </div>
                </div>

                {/* Link Input */}
                <div className="space-y-2">
                    <Label htmlFor="banner-link">Link (optional)</Label>
                    <Input
                        id="banner-link"
                        type="url"
                        placeholder="https://example.com"
                        value={data.link}
                        onChange={(e) => onUpdate('link', e.target.value)}
                    />
                </div>
            </CardContent>
        </div>
    );
};

export default BannerSection;
