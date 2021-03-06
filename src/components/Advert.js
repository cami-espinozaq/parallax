import { Box } from '@material-ui/core';
import React, { Fragment, useEffect, useState } from 'react';

const Advert = () => {

    const [[width, height], setWidth] = useState([window.innerWidth, window.innerHeight]);
    const breakpoint = 620;

    useEffect(() => {
        window.addEventListener('resize', () => setWidth([window.innerWidth, window.innerHeight]));
    }, []);

    const lamp = (
        <Fragment>
            <rect x="130.98" y="46.927" width="3.578" height="12.466" style={{ fill: '#08a' }}/>
            <path d="m125.53 48.568 15.925 0.05426 7.2498 38.126h-31.877z" style={{ fill: 'url(#linearGradient3116)', mixBlendMode: 'normal' }}/>
        </Fragment>
    );

    const textStyle = {
        fill: '#000000',
        fontFamily: 'Advent Pro',
        fontSize: '0.75em',
        fontVariantCaps: 'normal',
        fontVariantEastAsian: 'normal',
        fontVariantLigatures: 'normal',
        fontVariantNumeric: 'normal',
        letterSpacing: '1px',
        lineHeight: 1.25,
        whiteSpace: 'pre',
        wordSpacing: '0px'
    }

    const advertWidth = width < breakpoint ? "100%" : "80%";
    const poleHeight = height < breakpoint ? "10 0 268 122" : "10 0 268 90";

    const tSpan = (text, link) => {
        const hrefLink = link ? `https://www.${text}` : `mailto:${text}`;

        return (
            <tspan x="106.07422" y="81.800821"><tspan><a href={hrefLink}>{text}</a></tspan></tspan>
        )
    };

    return (
        <Box style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '80vh' }}>
            <svg width={advertWidth} height="100%" version="1.1" viewBox="10 40 268 160">
                <defs>
                    <linearGradient id="linearGradient3116" gradientUnits="userSpaceOnUse" x1="131.82" x2="132.94" y1="46.927" y2="86.403">
                        <stop stopColor="#fff" offset="0"/>
                        <stop stopColor="#fff" stopOpacity="0" offset="1"/>
                    </linearGradient>
                </defs>
                <g transform="translate(-63.536 0)">
                    <rect x="81.624" y="59.653" width="250.44" height="127.91" style={{ fill: '#d5f6ff', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '3.9688', stroke: '#08a' }}/>
                    <rect x="186.52" y="186.77" width="40.641" height="13.079" style={{ fill: '#08a' }}/>
                    <g transform="matrix(-1 0 0 1 248.6 -1.0179)">{lamp}</g>
                    <g transform="matrix(-1 0 0 1 308.87 -1.0179)">{lamp}</g>
                    <g transform="translate(103.62 -1.0179)">{lamp}</g>
                    <text transform="matrix(.98302 0 0 1 22.94 29.717)" xmlSpace="preserve" style={{...textStyle, letterSpacing: '0px'}}>
                        {tSpan('stackoverflow.com/users/13824742/camieq', true)}
                    </text>
                    <g transform="matrix(.17491 0 0 .17491 95.807 99.179)">
                        <path style={{ fill: '#000000' }} d="m84.4 93.8v-23.2h7.7v30.9h-69.5v-30.9h7.7v23.2z"/>
                        <path style={{ fill: '#000000' }} d="m38.8 68.4 37.8 7.9 1.6-7.6-37.8-7.9zm5-18 35 16.3 3.2-7-35-16.4zm9.7-17.2 29.7 24.7 4.9-5.9-29.7-24.7zm19.2-18.3-6.2 4.6 23 31 6.2-4.6zm-34.7 71.1h38.6v-7.7h-38.6z"/>
                    </g>
                    <path d="m106.15 72.705c-4.9584 0-8.98 4.0208-8.98 8.98 0 3.9676 2.5728 7.3336 6.1416 8.5212 0.44824 0.08315 0.59342-0.19544 0.59342-0.43177v-1.6718c-2.4979 0.54329-3.018-1.0596-3.018-1.0596-0.40858-1.0379-0.99753-1.3141-0.99753-1.3141-0.81493-0.55749 0.0622-0.54553 0.0622-0.54553 0.90172 0.06279 1.3762 0.92568 1.3762 0.92568 0.8007 1.3724 2.1005 0.97583 2.6132 0.74609 0.08-0.57995 0.31281-0.97657 0.57025-1.2003-1.9943-0.22825-4.0911-0.99829-4.0911-4.4384 0-0.98106 0.35097-1.7818 0.92492-2.4104-0.0928-0.22683-0.40035-1.1404 0.0877-2.3767 0 0 0.75432-0.24097 2.4702 0.92045 0.71616-0.19912 1.4839-0.29859 2.2472-0.30232 0.76328 0.0028 1.5318 0.10323 2.2495 0.30232 1.7144-1.1614 2.4673-0.92045 2.4673-0.92045 0.48865 1.237 0.18101 2.1507 0.0882 2.3767 0.57619 0.6286 0.92419 1.4301 0.92419 2.4104 0 3.4491-2.1006 4.2086-4.1001 4.4309 0.32177 0.27831 0.61589 0.82466 0.61589 1.6628v2.4642c0 0.23871 0.14368 0.51934 0.59941 0.43104 3.5658-1.1891 6.1356-4.5544 6.1356-8.5205 0-4.9592-4.0208-8.98-8.98-8.98z" style={{ strokeWidth:'.74833' }}/>
                    <text transform="matrix(.98302 0 0 1 22.932 1.8228)" xmlSpace="preserve" style={textStyle}>
                        {tSpan('github.com/cami-espinozaq', true)}
                    </text>
                    <path d="m111.73 159.57h-11.155c-1.0268 0-1.8592 0.83248-1.8592 1.8592v7.437c0 1.0268 0.83248 1.8592 1.8592 1.8592h11.155c1.0268 0 1.8592-0.83247 1.8592-1.8592v-7.437c0-1.0268-0.83248-1.8592-1.8592-1.8592zm-3.0603 4.9613 3.9354-3.3726c0.0273 0.0871 0.0545 0.17431 0.0545 0.27055v7.437c0 0.0644-0.0246 0.12166-0.0372 0.18246zm3.0603-4.0317c0.0617 0 0.1162 0.0236 0.17429 0.0354l-5.752 4.9304-5.752-4.9304c0.0581-0.0118 0.11257-0.0354 0.1743-0.0354zm-12.048 8.5481c-0.0127-0.0609-0.0368-0.1171-0.0368-0.18156v-7.437c0-0.0962 0.0277-0.1834 0.0549-0.27055l3.9341 3.3717zm0.89284 0.74806c-0.0939 0-0.1793-0.0273-0.26509-0.0536l4.0308-4.6064 1.5097 1.2937c0.0867 0.0754 0.19473 0.11259 0.30231 0.11259 0.10757 0 0.21561-0.0372 0.3023-0.11257l1.5097-1.2936 4.0308 4.6063c-0.0853 0.0263-0.17067 0.0535-0.26508 0.0535z" style={{ strokeWidth:'.029051' }}/>
                    <text transform="matrix(.98302 0 0 1 22.932 85.507)" xmlSpace="preserve" style={textStyle}>
                        {tSpan('camila.espinozaq@gmail.com', false)}
                    </text>
                    <path d="m110.48 129.83h-8.6612c-1.7081 0-3.0933 1.3852-3.0933 3.0932v8.6612c0 1.7081 1.3852 3.0933 3.0933 3.0933h8.6612c1.7087 0 3.0932-1.3852 3.0932-3.0933v-8.6612c0-1.7081-1.3845-3.0932-3.0932-3.0932zm-6.8052 11.754h-1.856v-6.8052h1.856zm-0.92797-7.5896c-0.59763 0-1.0826-0.48873-1.0826-1.0913 0-0.60259 0.48501-1.0913 1.0826-1.0913 0.5976 0 1.0826 0.48873 1.0826 1.0913 0 0.60256-0.48441 1.0913-1.0826 1.0913zm8.3518 7.5896h-1.856v-3.4669c0-2.0836-2.4746-1.9258-2.4746 0v3.4669h-1.856v-6.8052h1.856v1.0919c0.86364-1.5998 4.3306-1.718 4.3306 1.5318z"  style={{ strokeWidth:'.61865' }} />
                    <text transform="matrix(.98302 0 0 1 22.632 57.612)" xmlSpace="preserve" style={textStyle}>
                        {tSpan('linkedin.com/in/camilaeq', true)}
                    </text>
                    <g transform="translate(-11.642)">
                        <rect transform="matrix(-1 0 0 1 260.24 -1.0179)" x="119.25" y="42.526" width="27.02" height="10.673" style={{ fill: '#08a' }}/>
                        <rect transform="matrix(-1 0 0 1 320.51 -1.0179)" x="119.25" y="42.526" width="27.02" height="10.673" style={{ fill: '#08a' }}/>
                        <rect transform="translate(115.26 -1.0179)" x="119.25" y="42.526" width="27.02" height="10.673" style={{ fill: '#08a' }}/>
                        <g transform="translate(175.54 -1.0179)">
                            {lamp}
                            <rect x="119.25" y="42.526" width="27.02" height="10.673" style={{ fill: '#08a' }}/>
                        </g>
                    </g>
                </g>
            </svg>
            <svg width="100%" height="100%" version="1.1" viewBox={poleHeight} style={{ marginBottom: '-3%' }}>
                <g transform="translate(-63.536 -190)">
                    <rect x="201.25" y="190.09" width="11.193" height="122" style={{ fill: '#08a' }}/>
                </g>
            </svg>
            <svg width="100%" height="100%" version="1.1" viewBox="0 200 350 60">
                <g transform="translate(-63.536 -41.508)">
                    <path transform="matrix(.26458 0 0 .26458 63.698 28.945)" d="m1340.6 829.19c-3.0176-0.0658-6.0353-0.0611-9.0527-0.16211-7.6635-0.25663-15.326-0.61888-22.98-1.041-7.6549-0.42213-15.303-0.9058-22.941-1.4062-14.606-0.95697-29.204-1.977-43.789-3.0762-14.586-1.0991-29.159-2.2762-43.717-3.5469-19.238-1.6792-38.486-3.5239-57.748-5.3008-19.262-1.7769-38.536-3.4861-57.826-4.9004-9.6451-0.70711-19.294-1.341-28.947-1.8711-9.653-0.53015-19.311-0.95831-28.973-1.2539-9.6615-0.29556-19.327-0.45933-28.998-0.46289-9.6706-3e-3 -19.345 0.15399-29.025 0.5-6.0341 0.21581-12.058 0.50503-18.074 0.85547-6.016 0.35036-12.024 0.76106-18.025 1.2227-12.002 0.92315-23.976 2.047-35.936 3.2734-23.92 2.4529-47.78 5.322-71.678 7.8574-17.172 1.8219-34.382 3.4729-51.625 4.9355-17.243 1.4626-34.518 2.7375-51.816 3.8106s-34.622 1.9425-51.961 2.5957c-17.339 0.65314-34.693 1.09-52.057 1.293-9.9861 0.11679-19.975 0.15511-29.963 0.10938-9.9882-0.0457-19.977-0.17502-29.959-0.40039-9.9824-0.22526-19.959-0.54497-29.928-0.9668-9.9685-0.4218-19.928-0.94669-29.875-1.582-16.226-1.0364-32.432-2.3677-48.631-3.7637-16.199-1.3959-32.39-2.856-48.59-4.1484-8.0998-0.64619-16.201-1.2516-24.307-1.7852-8.1054-0.53348-16.216-0.99447-24.33-1.3574-8.1146-0.36283-16.234-0.62724-24.361-0.76172-8.1273-0.13455-16.261-0.13908-24.404 0.0117-8.458 0.15761-16.894 0.48477-25.312 0.94727-8.4183 0.4625-16.819 1.0589-25.207 1.7578-8.3881 0.69891-16.763 1.5002-25.131 2.3672-8.3674 0.86691-16.728 1.801-25.084 2.7676-16.712 1.9332-33.411 3.9965-50.135 5.918-8.3619 0.96072-16.73 1.885-25.109 2.7402-8.3789 0.85523-16.768 1.6409-25.174 2.3223-8.3406 0.67612-16.697 1.2499-25.066 1.7207-8.3691 0.47077-16.749 0.83838-25.137 1.1035-8.3873 0.26533-16.782 0.42714-25.178 0.48633-8.3953 0.059-16.79 0.0162-25.184-0.13086v197.74h1341.2z" style={{ fill: '#8dd35f' }}/>
                </g>
            </svg>
        </Box>
        
    );
}

export default Advert;