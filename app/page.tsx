'use client'
import {Card, CardBody, Link} from "@nextui-org/react";
export default function Home() {
  return (
    <Card>
    <CardBody>
      <div className="text-center">
      <p>It looks like you haven't completed your onboarding... <Link href="/onboarding" color="danger">Danger</Link></p>
      </div>
    </CardBody>
  </Card>
  )
}
