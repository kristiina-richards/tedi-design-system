import { ArgsTable, CURRENT_SELECTION, Description, Primary, Stories, Title } from '@storybook/addon-docs';
import { Meta, Story } from '@storybook/react';
import React from 'react';

import Button from '../button/button';
import { Card } from '../card';
import CardContent from '../card/card-content/card-content';
import CardHeader from '../card/card-header/card-header';
import { Col, Row } from '../grid';
import { VerticalSpacing } from '../vertical-spacing';
import StretchContent, { StretchContentProps } from './stretch-content';

export default {
  title: 'components/StretchContent',
  component: StretchContent,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Description>
            StretchContent helps with cases where parent size is not defined by its children and you need to scale the
            children to take all available space. A real world use-case would be multiple Cards in one row. Example for
            that can be found in Equal Height Card stories.
          </Description>
          <Primary />
          <ArgsTable story={CURRENT_SELECTION} />
          <Stories />
        </>
      ),
    },
  },
} as Meta;

const Template: Story<StretchContentProps> = (args) => {
  return (
    <div style={{ width: 500, height: 500 }}>
      <StretchContent {...args}>
        <div className="example-box">Element that gets stretched</div>
      </StretchContent>
    </div>
  );
};

export const Default = Template.bind({});

export const CardsExample: Story<Partial<StretchContentProps>> = () => {
  const lorem = (
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad expedita iste itaque laborum magnam non nulla
      tempora ullam! A consequuntur dicta et incidunt nisi pariatur sapiente, temporibus unde voluptatem?
    </p>
  );

  const card = (title: string, content: JSX.Element) => {
    return (
      <Card>
        <CardHeader>
          <h2>{title}</h2>
        </CardHeader>
        <CardContent>
          <StretchContent>
            <Row direction="column" gap={4}>
              <Col>
                <VerticalSpacing>{content}</VerticalSpacing>
              </Col>
              <Col width="auto">
                <Button>Click me</Button>
              </Col>
            </Row>
          </StretchContent>
        </CardContent>
      </Card>
    );
  };

  return (
    <Row>
      <Col>
        <StretchContent>
          {card(
            'Card with longer content',
            <>
              {lorem}
              {lorem}
            </>
          )}
        </StretchContent>
      </Col>
      <Col>{card('Card that is not stretched', <>{lorem}</>)}</Col>
      <Col>
        <StretchContent>{card('Card where content is also stretched', <>{lorem}</>)}</StretchContent>
      </Col>
    </Row>
  );
};
CardsExample.parameters = {
  backgrounds: {
    default: 'light',
  },
};