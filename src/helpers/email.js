import emailjs from 'emailjs-com';

export const sendEmail = (templateParams) => {
    return emailjs.send(
        'service_58al3oh',
        'template_qzo5pma',
        templateParams,
        'b38hCTFmYlygSFy_U',
    );
};
