import{Card, CardBody,CardFooter,Button,Badge} from '@chakra-ui/react'
import { Image } from "@chakra-ui/react";


export default function CardProjects({source,reference,bd,bd2}) {
    return (
        <Card maxW="sm" maxH="sm">
            <CardBody>
                 <Image
                    src={source}
                    borderRadius='lg'

                />
                <Badge variant='subtle' colorScheme='green'>{bd}</Badge>
                <Badge variant='subtle' colorScheme='red'>{bd2}</Badge>
                <CardFooter>
                     <Button w="100%" target='_blank'
                        href={reference} >
                        Code
                        </Button>
                </CardFooter>
            </CardBody>
                
        </Card>
    )
}       

