"use client"
import { Contact } from 'lucide-react';
import { Label } from '@/components/shadcn/label';
import { Input } from '@/components/shadcn/input';
import { ContactInfo } from '@/types/signature.interface';
import { capitalizeFirstLetter } from '@/lib/stringUtils';

interface ContactInformationProps {
    data: ContactInfo;
    onUpdate: (contactType: keyof ContactInfo, field: 'title' | 'value', value: string) => void;
}

function valueParser(str: string): string {
    switch (str) {
        case 'workPhone': return 'Work Phone';
        case 'address': return 'Address';
        case 'phone': return 'Phone Number';
        case 'website': return 'Website';
        case 'email': return 'Email Address';
        default:
            return str;
    }
}
const ContactInformation = ({ data, onUpdate }: ContactInformationProps) => {
    return (
        <div className="space-y-4">
            <h2 className="xl:text-xl flex items-center xl:justify-center gap-2">
                <Contact size={20} />
                Contact Information
            </h2>
            {Object.entries(data).map(([key, contact]) => (
                <div key={key} className="space-y-2">

                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
                        <Input
                            id={`${key}-title`}
                            label={`${capitalizeFirstLetter(key)} Title`}
                            floatingLabel={true}
                            value={contact.title}
                            onChange={(e) => onUpdate(key as keyof ContactInfo, 'title', e.target.value)}
                        />
                        <Input
                            id={`${key}-value`}
                            label={valueParser(key)}
                            floatingLabel={true}
                            value={contact.value}
                            onChange={(e) => onUpdate(key as keyof ContactInfo, 'value', e.target.value)}
                            type={key === 'email' ? 'email' : key === 'website' ? 'url' : 'text'}
                        />
                        <div className='xl:hidden'/>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactInformation;
