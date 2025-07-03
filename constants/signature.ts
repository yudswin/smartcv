import { FormData } from '@/types/signature.interface'

export const DEFAULT_SIGNATURE: FormData = {
    general: {
        name: '',
        pronoun: '',
        company: '',
        position: '',
        department: ''
    },
    contacts: {
        email: { 
            title: 'Email', 
            value: '' 
        },
        website: { 
            title: 'Website', 
            value: '' 
        },
        phone: { 
            title: 'Phone', 
            value: '' 
        },
        address: { 
            title: 'Address', 
            value: '' 
        },
        workPhone: { 
            title: 'Work Phone', 
            value: '' 
        }
    },
    customFields: [],
    images: {
        image: {
            file: null,
            width: 100,
            link: ''
        },
        banner: {
            file: null,
            width: 300,
            position: 'above',
            link: ''
        }
    },
    social: {
        caption: '',
        socialMediaItems: [],
        customIcon: null,
        selectedGalleryIcons: []
    }
}