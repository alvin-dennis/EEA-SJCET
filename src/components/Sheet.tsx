import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet"
import { navigation } from "@lib/constants"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function SheetComponent() {
  return (
    <Sheet>
      <VisuallyHidden>
      <SheetTitle></SheetTitle>
      </VisuallyHidden>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" size="icon">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" aria-describedby={undefined}>
        <nav className="flex flex-col space-y-4">
          {navigation.map((item) => (
            <a
              key={item.href} 
              href={item.href}
              className="hover:text-blue-600 transition-colors"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}
