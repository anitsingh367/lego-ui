import { SvgIcon, SvgIconProps, getFillColor } from '../SvgIcon';

export const ParspecLogoIcon: React.FC<SvgIconProps> = ({ fontSize, color }) => {
    return (
        <SvgIcon fontSize={fontSize} viewBox={`0 0 36 36`} xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.9751 0V5.34674C11.2702 5.36021 5.83898 10.8076 5.83898 17.5254C5.83898 24.2515 11.2837 29.7041 18 29.7041C24.7163 29.7041 30.161 24.2515 30.161 17.5254C30.161 15.2946 29.5621 13.2039 28.5165 11.4057L33.141 8.73189C34.641 11.3166 35.5 14.3205 35.5 17.5254C35.5 27.2044 27.665 35.0508 18 35.0508C8.33502 35.0508 0.5 27.2044 0.5 17.5254C0.5 7.8547 8.32155 0.013468 17.9751 0Z"
                fill={getFillColor(String(color))}
            />
            <path d="M28.5131 11.4891C27.4425 9.63209 25.9027 8.09003 24.0484 7.01789C22.1941 5.94576 20.0907 5.38132 17.9495 5.38132V17.5968L28.5131 11.4891Z" fill={getFillColor(String(color))} />
        </SvgIcon>
    );
};

ParspecLogoIcon.defaultProps = {
    fontSize: 'medium',
    color: 'primary'
};
