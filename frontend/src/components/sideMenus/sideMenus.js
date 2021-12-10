import React from "react";
import {  Stack, Container } from '@mui/material';
import { People, FavoriteBorder, StarOutline, Apartment, LocationOnOutlined, EmailOutlined, LinkOutlined } from '@mui/icons-material/';
import { InlineIconText } from '../texts/texts';
import * as S from './style';

export const UserMenu = () => {
    return (
        <S.Container
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{ minHeight: '100vh' }}
        >
            <Container>
                <Stack spacing={4} justifyContent={'center'}>
                    <S.UserImage
                        src='https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg'
                        variant="square"
                    />
                    <Stack>
                        <S.Text variant="h5">
                            Developer's full name
                        </S.Text>
                        <S.Text variant="subtitle1" >
                            @Username
                        </S.Text>
                    </Stack>
                    <S.Text variant="body2">
                        Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Sed tincidunt congue ligula in rutrum. Morbi nec lacus condimentum, hendrerit mi eu, feugiat.
                    </S.Text>
                    <Stack direction='row' justifyContent={'space-between'}>
                        <InlineIconText fontSize='15px' icon={<People />} text='200 followers' />
                        <InlineIconText fontSize='15px' icon={<FavoriteBorder />} text='130 following' />
                        <InlineIconText fontSize='15px' icon={<StarOutline />} text='100 stars' />
                    </Stack>
                    <Stack>
                        <S.Text variant="h6">
                            <Apartment /> organization
                        </S.Text>
                        <S.Text variant="h6">
                            <LocationOnOutlined /> location
                        </S.Text>
                        <S.Text variant="h6">
                            <EmailOutlined /> email
                        </S.Text>
                        <S.Text variant="h6">
                            <LinkOutlined /> www.mywebsite.com
                        </S.Text>
                        <S.Text variant="h6">
                            <LinkOutlined /> @myTwitter
                        </S.Text>
                    </Stack>
                    <S.WhiteButton variant="contained">Voltar</S.WhiteButton>
                </Stack>
            </Container>
        </S.Container>
    );
}