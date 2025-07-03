"use client"
import { User } from 'lucide-react';
import { Input } from '@/components/shadcn/input';
import { GeneralInfo } from '@/types/signature.interface';

interface GeneralInformationProps {
    data: GeneralInfo;
    onUpdate: (field: keyof GeneralInfo, value: string) => void;
}

const GeneralInformation = ({ data, onUpdate }: GeneralInformationProps) => {
    return (
        <div className="space-y-4">
            <h2 className="xl:text-xl flex items-center xl:justify-center gap-2 pt-2">
                <User size={20} />
                General Information
            </h2>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                <Input
                    id="name"
                    label="Name"
                    floatingLabel={true}
                    value={data.name}
                    onChange={(e) => onUpdate('name', e.target.value)}
                />
                <Input
                    id="pronoun"
                    label="Pronoun"
                    floatingLabel={true}
                    value={data.pronoun}
                    onChange={(e) => onUpdate('pronoun', e.target.value)}
                />
                <Input
                    id="company"
                    label="Company"
                    floatingLabel={true}
                    value={data.company}
                    onChange={(e) => onUpdate('company', e.target.value)}
                />
                <Input
                    id="position"
                    label="Position"
                    floatingLabel={true}
                    value={data.position}
                    onChange={(e) => onUpdate('position', e.target.value)}
                />
            </div>
            <div className='grid grid-cols-1 gap-4'>
                <Input
                    id="department"
                    label="Department"
                    floatingLabel={true}
                    value={data.department}
                    onChange={(e) => onUpdate('department', e.target.value)}
                />
            </div>
        </div>
    );
};

export default GeneralInformation;
