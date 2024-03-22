import { Textarea } from "@/components/ui/textarea"

export default function TextareaMessage() {
    return (
        <div className="grid w-full gap-1.5">
            <Textarea placeholder="Type your message here." id="message-2" />
        </div>
    )
}
