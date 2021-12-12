import React from "react";
import { Stack, Container } from '@mui/material';
import { People, FavoriteBorder, StarOutline, Apartment, LocationOnOutlined, EmailOutlined, LinkOutlined } from '@mui/icons-material/';
import { InlineIconText } from '../texts/texts';
import { ArrowBack } from '@mui/icons-material';
import * as S from './style';

export const UserMenu = ({ voltarClick, dados }) => {
    if(dados.blog)
        window.open(dados.blog)

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
                <Stack spacing={2} justifyContent={'center'}>
                    <Stack alignItems={'center'}>
                        <S.UserImage
                            src={dados.avatar ? dados.avatar
                                :
                                'https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2-2.png'}
                            variant="square"
                        />
                    </Stack>
                    <Stack>
                        <S.Text variant="h5" component={'span'}>
                            {dados.name ? dados.name : 'Sem Nome'}
                        </S.Text>
                        <S.Text variant="subtitle1" component={'span'}>
                            {dados.username ? dados.username : 'Sem Username'}
                        </S.Text>
                    </Stack>
                    <S.Text variant="body2" component={'span'}>
                        {dados.bio ? dados.bio : 'Sem Bio'}
                     </S.Text>
                    <Stack direction='row' justifyContent={'space-between'}>
                        <InlineIconText fontSize='15px' icon={<People />} text={dados.followers +' followers'}/>
                        <InlineIconText fontSize='15px' icon={<FavoriteBorder />} text={dados.following +' following'} />
                        <InlineIconText fontSize='15px' icon={<StarOutline />} text={dados.stars +' stars'}/>
                    </Stack>
                    <Stack>
                        <S.Text variant="h6" component={'span'}>
                            <Apartment /> {dados.organization ? dados.organization : 'Sem Organização'}
                        </S.Text>
                        <S.Text variant="h6" component={'span'}>
                            <LocationOnOutlined /> {dados.location ? dados.location : 'Sem Local'}
                        </S.Text>
                        <S.Text variant="h6" component={'span'}>
                            <EmailOutlined /> {dados.email ? dados.email : 'Sem E-mail'}
                        </S.Text>
                        <S.Text variant="h6" component={'span'}>
                            <LinkOutlined /> {dados.blog ? dados.blog : 'Sem Blog'}
                        </S.Text>
                        <S.Text variant="h6" component={'span'}>
                            <LinkOutlined />  {dados.twitter ? dados.twitter : 'Sem Twitter'}
                        </S.Text>
                    </Stack>
                    <S.WhiteButton variant="contained" startIcon={<ArrowBack />} onClick={voltarClick}>Voltar</S.WhiteButton>
                </Stack>
            </Container>
        </S.Container>
    );
}