import React from 'react';

interface HotelDescriptionProps {
    description: string; // HTML or markdown string
}

const HotelDescription: React.FC<HotelDescriptionProps> = ({ description = "This is description." }) => {
    // Basic rich-text rendering: split by paragraphs and bold markers
    const renderRichText = (text: string) => {
        return text
            .split('\n')
            .map((paragraph, idx) => {
                const parts = paragraph.split(/(\*\*.*?\*\*)/g); // Split on **bold**
                return (
                    <p key={idx} className="hotel-description-paragraph">
                        {parts.map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return (
                                    <strong key={i} className="hotel-description-bold">
                                        {part.slice(2, -2)}
                                    </strong>
                                );
                            }
                            return part;
                        })}
                    </p>
                );
            });
    };

    return (
        <div className="bg-gray-100 p-4 rounded-md">
            <h3 className="hotel-description-title">Description</h3>
            <div
                className="hotel-description-content"
                dangerouslySetInnerHTML={{ __html: description }}
            />
            {/* {renderRichText(description)} */}
        </div>
    );
};

export default HotelDescription;
