"use client"
import { useState } from 'react';
import { Input } from '@/components/shadcn/input';
import { Label } from '@/components/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Plus, X, Image, Star } from 'lucide-react';
import { SocialMediaItem } from '@/types/signature.interface';
import { SOCIAL_MEDIA_PLATFORMS } from '@/constants/socialMedia';

interface SocialIconSectionProps {
    caption: string;
    socialMediaItems: SocialMediaItem[];
    onCaptionUpdate: (caption: string) => void;
    onAdd: () => void;
    onRemove: (id: string) => void;
    onUpdate: (id: string, field: 'name' | 'value', value: string) => void;
    onAddFromGallery?: (platformName: string) => void;
    onAddFromCustomIcon?: () => void;
}

const SocialIconSection = ({ 
    caption, 
    socialMediaItems, 
    onCaptionUpdate, 
    onAdd, 
    onRemove, 
    onUpdate,
    onAddFromGallery,
    onAddFromCustomIcon
}: SocialIconSectionProps) => {
    const canAddMore = socialMediaItems.length < 5;

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Social Media Icons</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Caption Input */}
                <div className="space-y-2">
                    <Label htmlFor="social-caption">Caption</Label>
                    <Input
                        id="social-caption"
                        type="text"
                        placeholder="Follow me on social media"
                        value={caption}
                        onChange={(e) => onCaptionUpdate(e.target.value)}
                    />
                </div>

                {/* Social Media Items */}
                <div className="space-y-3">
                    <div className="flex items-center justify-between">
                        <Label>Social Media Links</Label>
                        {canAddMore && (
                            <Button
                                type="button"
                                variant="outline"
                                size="sm"
                                onClick={onAdd}
                                className="flex items-center gap-1"
                            >
                                <Plus size={16} />
                                Add Social Media
                            </Button>
                        )}
                    </div>

                    {socialMediaItems.length === 0 ? (
                        <p className="text-sm text-muted-foreground">
                            No social media links added yet. Click "Add Social Media" to get started.
                        </p>
                    ) : (
                        <div className="space-y-3">
                            {socialMediaItems.map((item) => {
                                const isFromGallery = item.icon && item.icon !== 'custom';
                                const isFromCustom = item.icon === 'custom';
                                const platformData = SOCIAL_MEDIA_PLATFORMS.find(p => p.name === item.icon);
                                
                                return (
                                    <div key={item.id} className="flex gap-2 items-end">
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center gap-2">
                                                <Label htmlFor={`social-name-${item.id}`} className="text-xs">
                                                    Platform Name
                                                </Label>
                                                {isFromGallery && platformData && (
                                                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <Star size={12} />
                                                        {platformData.icon} Gallery
                                                    </span>
                                                )}
                                                {isFromCustom && (
                                                    <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded flex items-center gap-1">
                                                        <Image size={12} />
                                                        Custom Icon
                                                    </span>
                                                )}
                                            </div>
                                            <Input
                                                id={`social-name-${item.id}`}
                                                type="text"
                                                placeholder="e.g., LinkedIn"
                                                value={item.name}
                                                onChange={(e) => onUpdate(item.id, 'name', e.target.value)}
                                                disabled={isFromGallery || isFromCustom}
                                            />
                                        </div>
                                        <div className="flex-1 space-y-1">
                                            <Label htmlFor={`social-value-${item.id}`} className="text-xs">
                                                Profile URL
                                            </Label>
                                            <Input
                                                id={`social-value-${item.id}`}
                                                type="url"
                                                placeholder="https://linkedin.com/in/username"
                                                value={item.value}
                                                onChange={(e) => onUpdate(item.id, 'value', e.target.value)}
                                            />
                                        </div>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => onRemove(item.id)}
                                            className="mb-0"
                                        >
                                            <X size={16} />
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {!canAddMore && (
                        <p className="text-xs text-muted-foreground">
                            Maximum of 5 social media links allowed.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default SocialIconSection;
