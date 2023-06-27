import Heading from "./Heading"
import Section from "./section"

export default function Page(){
return(
    <Section level={1}>
        <Heading>title</Heading>
        <Section level={2}>
            <Heading>heading</Heading>
            <Section level={3}>
                <Heading>sub-heading</Heading>
                <Section level={4}>
                    <Heading>sub-sub-heading</Heading>
                </Section>
            </Section>

        </Section>
    </Section>
)
}