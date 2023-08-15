import { Input } from '../input'

export default {
  title: 'Input v2',
  component: Input
}

export const Primary = () => <div style={{ width: 500 }}><Input id="test" /></div>
export const InputWithLabel = () => <div style={{ width: 500 }}><Input id="test" label="My label" /></div>
export const InputWithLabelOptional = () => <div style={{ width: 500 }}><Input id="test" label="My label" isOptional={true} /></div>
export const InputWithError = () => <div style={{ width: 500 }}><Input id="test" label="Email" errorMessage="Please enter your email address." /></div>
export const InputDisabled = () => <div style={{ width: 500 }}><Input id="test" label="Email" disabled={true} /></div>
export const InputWithLimit = () => <div style={{ width: 500 }}><Input id="test" label="My label" limit={99} /></div>

export const AllVariants = () => {
  return (
    <div style={{ width: 400 }}>
      <Input id="test" />
      <br /><br />

      <Input id="test" label="My label" />
      <br /><br />

      <Input id="test" label="My label" isOptional={true} />
      <br /><br />

      <Input id="test" label="Email" errorMessage="Please enter your email address." />
      <br /><br />

      <Input id="test" label="Email" disabled={true} />
      <br /><br />

      <Input id="test" label="My label" limit={99} />
      <br /><br />
    </div>
  );
};