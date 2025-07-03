"use client"
import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/shadcn/card'
import { Tabs, TabsContent } from "@/components/shadcn/tabs";
import { useState } from 'react';
import { HouseIcon, Image, MenuIcon } from 'lucide-react';
import { TbSocial } from 'react-icons/tb';
import COLORS from '@/constants/colors';
import { EditorTab, FormData, GeneralInfo, ContactInfo, ImageData, BannerData, SocialData, SocialMediaItem } from '@/types/signature.interface';
import { DEFAULT_SIGNATURE } from '@/constants/signature';
import TabNavigation from './sections/TabNavigation';
import GeneralInformation from './sections/GeneralInformation';
import ContactInformation from './sections/ContactInformation';
import CustomFields from './sections/CustomFields';
import ImageSection from './sections/ImageSection';
import BannerSection from './sections/BannerSection';
import SocialIconSection from './sections/SocialIconSection';
import CustomIconSection from './sections/CustomIconSection';
import GallerySection from './sections/GallerySection';


const GeneralTab = () => {
    const [activeEntity, setActiveEntity] = useState<string>("general");
    const [formData, setFormData] = useState<FormData>(DEFAULT_SIGNATURE);

    const updateGeneralInfo = (field: keyof GeneralInfo, value: string) => {
        setFormData(prev => ({
            ...prev,
            general: { ...prev.general, [field]: value }
        }));
    };

    const updateContactInfo = (contactType: keyof ContactInfo, field: 'title' | 'value', value: string) => {
        setFormData(prev => ({
            ...prev,
            contacts: {
                ...prev.contacts,
                [contactType]: { ...prev.contacts[contactType], [field]: value }
            }
        }));
    };

    const addCustomField = () => {
        setFormData(prev => ({
            ...prev,
            customFields: [...prev.customFields, { id: Date.now().toString(), title: '', value: '' }]
        }));
    };

    const removeCustomField = (id: string) => {
        setFormData(prev => ({
            ...prev,
            customFields: prev.customFields.filter(field => field.id !== id)
        }));
    };

    const updateCustomField = (id: string, field: 'title' | 'value', newValue: string) => {
        setFormData(prev => ({
            ...prev,
            customFields: prev.customFields.map(f =>
                f.id === id ? { ...f, [field]: newValue } : f
            )
        }));
    };

    const updateImageData = (field: keyof ImageData, value: any) => {
        setFormData(prev => ({
            ...prev,
            images: {
                ...prev.images,
                image: { ...prev.images.image, [field]: value }
            }
        }));
    };

    const updateBannerData = (field: keyof BannerData, value: any) => {
        setFormData(prev => ({
            ...prev,
            images: {
                ...prev.images,
                banner: { ...prev.images.banner, [field]: value }
            }
        }));
    };

    const updateSocialCaption = (caption: string) => {
        setFormData(prev => ({
            ...prev,
            social: { ...prev.social, caption }
        }));
    };

    const addSocialMediaItem = () => {
        setFormData(prev => ({
            ...prev,
            social: {
                ...prev.social,
                socialMediaItems: [...prev.social.socialMediaItems, { 
                    id: Date.now().toString(), 
                    name: '', 
                    value: '' 
                }]
            }
        }));
    };

    const removeSocialMediaItem = (id: string) => {
        setFormData(prev => {
            const itemToRemove = prev.social.socialMediaItems.find(item => item.id === id);
            let updatedState = {
                ...prev,
                social: {
                    ...prev.social,
                    socialMediaItems: prev.social.socialMediaItems.filter(item => item.id !== id)
                }
            };

            // If removing an item that came from gallery, also deselect it
            if (itemToRemove?.icon && itemToRemove.icon !== 'custom') {
                updatedState.social.selectedGalleryIcons = prev.social.selectedGalleryIcons.filter(
                    iconName => iconName !== itemToRemove.icon
                );
            }

            // If removing custom icon item, also clear the custom icon file
            if (itemToRemove?.icon === 'custom') {
                updatedState.social.customIcon = null;
            }

            return updatedState;
        });
    };

    const updateSocialMediaItem = (id: string, field: 'name' | 'value', value: string) => {
        setFormData(prev => ({
            ...prev,
            social: {
                ...prev.social,
                socialMediaItems: prev.social.socialMediaItems.map(item =>
                    item.id === id ? { ...item, [field]: value } : item
                )
            }
        }));
    };

    const toggleGalleryIcon = (iconName: string) => {
        setFormData(prev => {
            const isCurrentlySelected = prev.social.selectedGalleryIcons.includes(iconName);
            const newSelectedIcons = isCurrentlySelected
                ? prev.social.selectedGalleryIcons.filter(name => name !== iconName)
                : [...prev.social.selectedGalleryIcons, iconName];

            // If selecting a new icon and there's room, add it to social media items
            if (!isCurrentlySelected && prev.social.socialMediaItems.length < 5) {
                const newSocialItem = {
                    id: Date.now().toString(),
                    name: iconName,
                    value: '',
                    icon: iconName
                };
                
                return {
                    ...prev,
                    social: {
                        ...prev.social,
                        selectedGalleryIcons: newSelectedIcons,
                        socialMediaItems: [...prev.social.socialMediaItems, newSocialItem]
                    }
                };
            }

            // If deselecting, remove the corresponding social media item
            if (isCurrentlySelected) {
                return {
                    ...prev,
                    social: {
                        ...prev.social,
                        selectedGalleryIcons: newSelectedIcons,
                        socialMediaItems: prev.social.socialMediaItems.filter(item => item.icon !== iconName)
                    }
                };
            }

            return {
                ...prev,
                social: {
                    ...prev.social,
                    selectedGalleryIcons: newSelectedIcons
                }
            };
        });
    };

    const updateCustomIcon = (file: File | null) => {
        setFormData(prev => {
            // If uploading a new custom icon and there's room, add it to social media items
            if (file && prev.social.socialMediaItems.length < 5) {
                const customIconItem = {
                    id: Date.now().toString(),
                    name: 'Custom Icon',
                    value: '',
                    icon: 'custom'
                };

                return {
                    ...prev,
                    social: {
                        ...prev.social,
                        customIcon: file,
                        socialMediaItems: [...prev.social.socialMediaItems, customIconItem]
                    }
                };
            }

            // If removing custom icon, remove the corresponding social media item
            if (!file) {
                return {
                    ...prev,
                    social: {
                        ...prev.social,
                        customIcon: file,
                        socialMediaItems: prev.social.socialMediaItems.filter(item => item.icon !== 'custom')
                    }
                };
            }

            return {
                ...prev,
                social: { ...prev.social, customIcon: file }
            };
        });
    };
    const entities: EditorTab[] = [
        { id: "general", label: <HouseIcon color={COLORS.red} />, tooltip: "General Information\nConfigure basic signature details" },
        { id: "images", label: <Image color={COLORS.orange} />, tooltip: "Images\nAdd logos and profile pictures" },
        { id: "social", label: <TbSocial color={COLORS.green} />, tooltip: "Social Media\nAdd social media links and icons" },
        { id: "add-ons", label: <MenuIcon color={COLORS.purple} />, tooltip: "Add-ons & Extras\nAdditional signature components" },
    ];
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
        >
            <Card className='bg-background h-[78vh] overflow-scroll'>
                <Tabs value={activeEntity} onValueChange={setActiveEntity}>
                    <TabNavigation entities={entities} activeEntity={activeEntity} />
                    <form>
                        <CardContent >
                            <TabsContent value="general" className="space-y-4">
                                <GeneralInformation
                                    data={formData.general}
                                    onUpdate={updateGeneralInfo}
                                />
                                <ContactInformation
                                    data={formData.contacts}
                                    onUpdate={updateContactInfo}
                                />
                                <CustomFields
                                    data={formData.customFields}
                                    onAdd={addCustomField}
                                    onRemove={removeCustomField}
                                    onUpdate={updateCustomField}
                                />
                            </TabsContent>
                        </CardContent>
                        <CardContent>
                            <TabsContent value="images" className="space-y-4">
                                <ImageSection
                                    data={formData.images.image}
                                    onUpdate={updateImageData}
                                />
                                <BannerSection
                                    data={formData.images.banner}
                                    onUpdate={updateBannerData}
                                />
                            </TabsContent>
                        </CardContent>
                        <CardContent>
                            <TabsContent value="social" className="space-y-4">
                                <SocialIconSection
                                    caption={formData.social.caption}
                                    socialMediaItems={formData.social.socialMediaItems}
                                    onCaptionUpdate={updateSocialCaption}
                                    onAdd={addSocialMediaItem}
                                    onRemove={removeSocialMediaItem}
                                    onUpdate={updateSocialMediaItem}
                                />
                                <CustomIconSection
                                    customIcon={formData.social.customIcon}
                                    onUpdate={updateCustomIcon}
                                />
                                <GallerySection
                                    selectedIcons={formData.social.selectedGalleryIcons}
                                    onIconToggle={toggleGalleryIcon}
                                />
                            </TabsContent>
                        </CardContent>
                    </form>
                </Tabs>
            </Card>
        </motion.div>
    )
}

export default GeneralTab