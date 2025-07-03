"use client"
import { Plus, Trash2 } from 'lucide-react';
import { Label } from '@/components/shadcn/label';
import { Input } from '@/components/shadcn/input';
import { CustomField } from '@/types/signature.interface';

interface CustomFieldsProps {
    data: CustomField[];
    onAdd: () => void;
    onRemove: (id: string) => void;
    onUpdate: (id: string, field: 'title' | 'value', value: string) => void;
}

const CustomFields = ({ data, onAdd, onRemove, onUpdate }: CustomFieldsProps) => {
    return (
        <div className="space-y-4 pb-20">
            <div className="flex justify-between items-center">
                <h2 className="xl:text-xl flex items-center xl:justify-center gap-2">
                    <Plus size={20} />
                    Custom Fields
                </h2>
                <button
                    type="button"
                    onClick={onAdd}
                    className="flex items-center gap-2 px-3 py-2 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                >
                    <Plus size={16} />
                    <span className='hidden md:block'>
                        Add Field
                    </span>
                </button>
            </div>

            {data.length === 0 ? (
                <div className="text-center py-8 text-muted-foreground">
                    <Plus size={48} className="mx-auto mb-4 opacity-50" />
                    <p>No custom fields yet. Click "Add Field" to create one.</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {data.map((field) => (
                        <div key={field.id} className="p-4 border rounded-lg space-y-3">
                            <div className="flex justify-between items-center">
                                <Label className="font-medium">Custom Field</Label>
                                <button
                                    type="button"
                                    onClick={() => onRemove(field.id)}
                                    className="text-destructive hover:text-destructive/80 transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                <Input
                                    id={`custom-title-${field.id}`}
                                    label="Title"
                                    floatingLabel={true}
                                    value={field.title}
                                    onChange={(e) => onUpdate(field.id, 'title', e.target.value)}
                                />
                                <Input
                                    id={`custom-value-${field.id}`}
                                    label="Value"
                                    floatingLabel={true}
                                    value={field.value}
                                    onChange={(e) => onUpdate(field.id, 'value', e.target.value)}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default CustomFields;
