"use client"
import { useState } from 'react';
import { Input } from '@/components/shadcn/input';
import { Label } from '@/components/shadcn/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import { Search } from 'lucide-react';
import { SOCIAL_MEDIA_PLATFORMS } from '@/constants/socialMedia';

interface GallerySectionProps {
    selectedIcons: string[];
    onIconToggle: (iconName: string) => void;
}

const GallerySection = ({ selectedIcons, onIconToggle }: GallerySectionProps) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPlatforms = SOCIAL_MEDIA_PLATFORMS.filter(platform =>
        platform.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const isSelected = (iconName: string) => selectedIcons.includes(iconName);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-lg font-semibold">Icon Gallery</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {/* Search Bar */}
                <div className="space-y-2">
                    <Label htmlFor="icon-search">Search Social Media Icons</Label>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                        <Input
                            id="icon-search"
                            type="text"
                            placeholder="Search for social media platforms..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10"
                        />
                    </div>
                </div>

                {/* Icon Grid */}
                <div className="space-y-2">
                    <Label>Available Icons</Label>
                    <p className="text-xs text-muted-foreground">
                        Click icons to select them. Selected icons will automatically add fields to the Social Media Links section above.
                    </p>
                    <div className="grid grid-cols-4 gap-2 max-h-60 overflow-y-auto">
                        {filteredPlatforms.map((platform) => (
                            <Button
                                key={platform.name}
                                type="button"
                                variant={isSelected(platform.name) ? "default" : "outline"}
                                size="sm"
                                onClick={() => onIconToggle(platform.name)}
                                className="flex flex-col items-center gap-1 h-auto p-3"
                            >
                                <span className="text-lg">{platform.icon}</span>
                                <span className="text-xs">{platform.name}</span>
                            </Button>
                        ))}
                    </div>
                </div>

                {filteredPlatforms.length === 0 && (
                    <p className="text-sm text-muted-foreground text-center py-4">
                        No social media platforms found matching "{searchTerm}"
                    </p>
                )}

            </CardContent>
        </Card>
    );
};

export default GallerySection;
