import * as React from 'react';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, timelineItemClasses } from '@mui/lab';
import { educations, workExperience } from '@/data';
import { cn } from '@/lib/utils';

const BasicTimeline = ({ section, isGenerate = false }: { section?: string, isGenerate?: boolean }) => {
    if (section == "experienced") {
        // Urutkan workExperience berdasarkan id secara descending
        const sortedExperience = [...workExperience].sort((a, b) => b.id - a.id);
        return (
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }
                }>
                {sortedExperience.map((experience, index) => {
                    return (
                        experience.category !== "freelance" && (
                            <TimelineItem key={experience.id} className={cn({
                                "mt-40 pt-10": experience.title === "Frontend Developer" && isGenerate
                            })}>
                                <TimelineSeparator>
                                    <TimelineDot />
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>
                                    <h3 className="text-md font-semibold text-gray-800 mb-2">{experience.title}</h3>
                                    <span className="text-gray-600 bg-[#e4edf9] p-1">{experience.year}</span>
                                    <p className="mt-2 text-gray-800 italic">
                                        {experience.client}
                                    </p>
                                    <ul className="list-disc pl-6 mt-2 text-gray-700 space-y-1">
                                        {experience.task.map((task, index) => (
                                            <li key={index}>{task}</li>
                                        ))}
                                    </ul>
                                </TimelineContent>
                            </TimelineItem>
                        )
                    );
                })}
            </Timeline >
        );
    } else {
        return (
            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }
                }>
                {educations.map((education, id) => {
                    return (
                        <TimelineItem key={id}>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <h3 className="text-md font-semibold text-gray-800 mb-2">{education.title}</h3>
                                <span className="text-gray-600 bg-[#e4edf9] p-1">{education.year}</span>
                                <p className="mt-2 text-gray-800 italic">
                                    {education.university}
                                </p>
                            </TimelineContent>
                        </TimelineItem>
                    )
                })}
            </Timeline>
        );
    };
}

export default BasicTimeline;
